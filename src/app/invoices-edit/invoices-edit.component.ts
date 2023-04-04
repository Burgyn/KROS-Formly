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
  styleUrls: ['./invoices-edit.component.scss']
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
          }
        },
        {
          key: 'dueDate',
          type: 'input',
          props: {
            type: 'date',
            label: 'Dátum splatnosti',
            placeholder: 'Dátum splatnosti',
          }
        },
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        CustomerFieldTypeComponent.createField('customer', 'Zákazník'),
        CustomerFieldTypeComponent.createField('supplier', 'Dodávateľ', false, [
          {
            key: 'name',
            type: 'input',
            props: {
              disabled: true,
              label: 'Názov',
            }
          },
          {
            key: 'address',
            type: 'input',
            props: {
              disabled: true,
              label: 'Adresa',
            }
          }
        ]),
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
        columns: [
          {
            field: 'description',
            header: 'Popis',
          },
          {
            field: 'quantity',
            header: 'Množstvo',
          },
          {
            field: 'price',
            header: 'Cena',
          },
        ]
      }
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
          }
        },
        {
          key: 'notes',
          type: 'input',
          props: {
            label: 'Poznámka',
            placeholder: 'Poznámka',
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
          }
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
                field.props.options = field.form?.get('currency')?.valueChanges.pipe(
                  switchMap((currency) => {
                    return this.dataService.getBankAccountByCurrency(currency);
                  })
                );
              }
            },
          }
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
          }
        },
        {
          key: 'paid',
          type: 'checkbox',
          props: {
            label: 'Zaplatené',
          }
        },
        {
          hideExpression:  model =>  model.total < 50,
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
  //   - ked vyberiem partnera tak sa vyplnia jeho udaje
  // - jednoduche skrivanie / disablovanie ✔️
  // - Discount
  // - preskumat tie ich extensions
  // - validacie
  // - zoznam poloziek ako grid
  //   - pridat polozku / vymazat polozku
  // - trochu to refaktorovat a presunut to damostatnych tried


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
