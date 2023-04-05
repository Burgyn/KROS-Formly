import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CustomerFieldTypeComponent } from '../customer-field-type/customer-field-type.component';
import { DiscountComponent } from '../discount/discount.component';
import { DxGroupWrapperComponent } from '../dx-group-wrapper/dx-group-wrapper.component';
import { DataService } from '../data.service';
import { map, of, startWith, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-invoices-edit',
  templateUrl: './invoices-edit.component.html',
  styleUrls: ['./invoices-edit.component.scss'],
})
export class InvoicesEditComponent {
  constructor(private dataService: DataService) { }

  form = new FormGroup({});
  model = this.dataService.getInvoice(1);
  fields: FormlyFieldConfig[] = [
    {
      key: 'id',
      className: 'section-label',
      template: '<h2>Faktura 1</h2>',
    },
    {
      props: {
        label: 'Základné informácie',
      },
      wrappers: ['dx-group'],
      fieldGroup: [
        {
          key: 'number',
          type: 'input',
          props: {
            label: 'Čislo faktúry',
            placeholder: 'Čislo faktúry',
            required: true,
          },
        },
        {
          key: 'date',
          type: 'input',
          props: {
            type: 'date',
            label: 'Dátum',
            placeholder: 'Dátum vystavenia',
            required: true,
          },
        },
        {
          key: 'dueDate',
          type: 'input',
          props: {
            type: 'date',
            label: 'Dátum splatnosti',
            placeholder: 'Dátum splatnosti',
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        CustomerFieldTypeComponent.createField('customer', 'Zákazník'),
        //ToDo: definovanie toho ktore fieldy sa maju zobrazit by som definoval cez props.
        CustomerFieldTypeComponent.createField('supplier', 'Dodávateľ', false, [
          {
            type: '#name',
            props: {
              disabled: true,
            }
          },
          {
            type: '#address',
            props: {
              disabled: true,
            }
          }
        ], false),
      ]
    },
    {
      key: 'items',
      type: 'dx-grid',
      wrappers: ['dx-group'],
      props: {
        label: 'Položky',
        placeholder: 'Položky',
        header: 'Položky',
        allowColumnResizing: true,
        keyExpr: 'code',
        columns: [
          {
            dataField: 'code',
            caption: 'Kód',
            width: 70,
          },
          {
            dataField: 'description',
            caption: 'Názov',
            width: 300,
          },
          {
            dataField: 'quantity',
            caption: 'Množstvo',
            width: 80,
          },
          {
            dataField: 'price',
            caption: 'Cena',
            width: 100,
            format: ' ##0.00',
          },
          {
            dataField: 'tax',
            caption: 'DPH',
            width: 100,
          },
          {
            dataField: 'total',
            caption: 'Celkom',
            width: 100,
            format: ' ##0.00',
          },
          {
            dataField: 'discount',
            caption: 'Zľava',
            width: 90,
          },
        ],
      },
    },
    {
      wrappers: ['dx-group'],
      props: {
        label: 'Texty',
      },
      fieldGroup: [
        {
          key: 'terms',
          type: 'input',
          props: {
            label: 'Podmienky',
            placeholder: 'Podmienky',
          },
        },
        {
          key: 'notes',
          type: 'input',
          props: {
            label: 'Poznámka',
            placeholder: 'Poznámka',
          },
          expressions: {
            'model.notes': (field) => {
              return 'Fakturujem pre ' + field.model.customer.name;
            }
          }
        }
      ]
    },
    {
      props: {
        label: 'Platba',
      },
      wrappers: ['dx-group'],
      fieldGroup: [
        {
          key: 'currency',
          type: 'select',
          props: {
            label: 'Mena',
            placeholder: 'Mena',
            displayExpr: 'name',
            valueExpr: 'code',
            searchEnabled: true,
            options: this.dataService.getCurrencies(),
          },
        },
        {
          key: 'bankAccount',
          type: 'select',
          props: {
            label: 'Bankový účet',
            placeholder: 'Bankový účet',
            displayExpr: 'name',
            valueExpr: 'code',
            options: [],
          },
          hooks: {
            onInit: (field) => {
              if (field.props) {
                field.props.options = field.form
                  ?.get('currency')
                  ?.valueChanges.pipe(
                    switchMap((currency) => {
                      return this.dataService.getBankAccountByCurrency(
                        currency
                      );
                    })
                  );
              }
            },
          }
        },
        {
          key: "bankInfo",
          props: {
            dependsOn: 'bankAccount',
          },
          fieldGroup: [
            {
              key: 'name',
              type: 'input',
              props: {
                disabled: true,
              }
            },
            {
              key: 'code',
              type: 'input',
              props: {
                disabled: true,
              }
            }
          ]
        },
        {
          type: '#typeOfPayment',
        }
      ]
    },
    {
      wrappers: ['dx-group'],
      props: {
        label: 'Cena',
      },
      fieldGroup: [
        {
          key: 'total',
          type: 'input',
          props: {
            // toto chcem readonly (respektive len text)
            type: 'number',
            label: 'Celkom',
            placeholder: 'Celkom',
          },
        },
        {
          key: 'paid',
          type: 'checkbox',
          props: {
            label: 'Zaplatené',
          },
        },
        {
          hideExpression: model => model.total < 50,
          fieldGroup: [
            DiscountComponent.createField(),
          ]
        }
      ]
    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }

  //ToDo:
  // - Dvojstlpcovy layout ✔️
  // - ked vyberiem menu tak sa vyfiltruje iban podla meny ✔️
  // - cobo partnera
  //   - ked vyberiem partnera tak sa vyplnia jeho udaje ✔️
  //   - ked vyberiem partnera tak sa nastavi poznamka ✔️
  // - jednoduche skrivanie / disablovanie ✔️
  // - preskumat tie ich extensions
  // - validacie
  // - zoznam poloziek ako grid ✔️
  //   - pridat polozku / vymazat polozku
  // - trochu to refaktorovat a presunut to damostatnych tried
  // - presets ✔️

  // -----------------------------
  // - pridat dalsie polozky
  //   - meny z jednoycheho comba
  //   - IBAN - zo specialneho comba
  //     - ked vyberiem IBAN tak sa zobrazi aj banka (inac sa nezobrazi)
  //     - zoznam ibanov sa mi zobrazi na zaklade vybranej meny
  //   - zlava za doklad
  //    - zobrazi sa specialny komponent s hodnotou a typom
  //   - peciatka
  //   - splatnost - combo a datum, navzajom sa posuvaju
  // - validacie
  // - spravne ovladace
  // - customer component
  //   - moznov vyber partnera zo super comba
  //   - supercombo priamo v tom komponente
  // - schovat celu sekciu na zaklade niecoho
  // - zoznam poloziek ako grid
  // - lokalizacia
  // - refaktorovany do samostatneho komponentu
  // - peknejsi layout
  // - tabcontrol
  // pouzi https://formly.dev/docs/guide/custom-formly-wrapper
  // - dynamic json schema
}
