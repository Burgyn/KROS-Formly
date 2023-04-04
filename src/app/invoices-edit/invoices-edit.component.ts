import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CustomerFieldTypeComponent } from '../customer-field-type/customer-field-type.component';
import { DiscountComponent } from '../discount/discount.component';
import { DxGroupWrapperComponent } from '../dx-group-wrapper/dx-group-wrapper.component';

@Component({
  selector: 'app-invoices-edit',
  templateUrl: './invoices-edit.component.html',
  styleUrls: ['./invoices-edit.component.scss']
})
export class InvoicesEditComponent {
  form = new FormGroup({});
  model = {
    id: 1,
    number: 'OF 20230001',
    date: '2021-01-01',
    dueDate: '2021-01-31',
    customer: {
      id: 1,
      name: 'John Doe',
      address: '123 Main St.',
      email: 'john.doe@gmail.com',
      city: 'New York',
      state: 'NY',
      zip: '10001'
    },
    supplier: {
      id: 2,
      name: 'Acme Inc.',
      address: '123 Main St.',
      email: 'acme@someone.com',
      city: 'New York',
      state: 'NY',
      zip: '10001'
    },
    items: [
      { description: 'Item 1', quantity: 1, price: 10.00 },
      { description: 'Item 2', quantity: 2, price: 5.00 },
      { description: 'Item 3', quantity: 3, price: 15.00 },
      { description: 'Item 4', quantity: 4, price: 20.00 }
    ],
    terms: 'No returns or refunds.',
    notes: 'Thank you for your business.',
    total: 25.00,
    paid: false,
    currency: 'USD',
    bankAccount: {
      name: 'Bank of America',
      iban: 'US1234567890',
    },
    discount: {
      allowed: true,
      discount: 10,
      type: 'percent'
    }
  };
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
    CustomerFieldTypeComponent.createField('customer', 'Zákazník'),
    CustomerFieldTypeComponent.createField('supplier', 'Dodávateľ', false, [
      {
        key: 'name',
        type: 'input',
      },
      {
        key: 'address',
        type: 'input',
        props: {
          disabled: true,
        }
      }
    ]),
    {
      key: 'items',
      type: 'grid',
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
            options: [
              { value: 'EUR', label: 'Euro (EUR)' },
              { value: 'USD', label: 'Americký dolár (USD)' },
              { value: 'GBP', label: 'Libra (GBP)' },
              { value: 'CZK', label: 'Česká koruna (CZK)' },
            ],
          }
        },
        {
          key: 'bankAccount',
          type: 'select',
          // wrappers: [DxGroupWrapperComponent],
          props: {
            label: 'Bankový účet',
            placeholder: 'Bankový účet',
            options: [
              { value: 'US1234567890', label: 'Bank of America (US1234567890)' },
              { value: 'US9876543210', label: 'Bank of America (US9876543210)' },
              { value: 'CZ1234567890', label: 'Česká spořitelna (CZ1234567890)' },
              { value: 'CZ9876543210', label: 'Česká spořitelna (CZ9876543210)' },
            ],
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
        DiscountComponent.createField()
      ]
    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }



  //ToDo:
  // - Dvojstlpcovy layout
  // - ked vyberiem menu tak sa vyfiltruje iban podla meny
  // - cobo partnera
  //   - ked vyberiem partnera tak sa vyplnia jeho udaje






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
