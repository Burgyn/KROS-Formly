import { Component, OnInit } from '@angular/core';
import { FieldArrayType, FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { DxGroupWrapperComponent } from '../dx-group-wrapper/dx-group-wrapper.component';

@Component({
  templateUrl: './customer-field-type.component.html',
  styleUrls: ['./customer-field-type.component.scss']
})
export class CustomerFieldTypeComponent extends FieldType<FieldTypeConfig> implements OnInit {
  ngOnInit() {
  }

  public static createField(key: string = 'customer', label: string = 'Customer', 
    required: boolean = false, fields: FormlyFieldConfig[] | undefined = undefined): FormlyFieldConfig {
      const f = fields ? fields : CustomerFieldTypeComponent.createDefaultFields();
    return {
      key: key,
      type: 'customer',
      wrappers: ['dx-group'],
      props: {
        label: label,
        placeholder: label,
        required: required,
      },
      fieldGroup: [
        {
          key: 'id',
        },
        ...f,
      ],
    };
  }

  public static createDefaultFields() {
    return [
      {
        key: 'name',
        type: 'input',
        props: {
          label: 'Názov',
          placeholder: 'Názov',
          required: true,
        }
      },
      {
        key: 'address',
        type: 'input',
        props: {
          label: 'Adresa',
          placeholder: 'Adresa',
        }
      },
      {
        key: 'email',
        type: 'input',
        props: {
          label: 'Email',
          placeholder: 'Email',
        }
      },
      {
        fieldGroup: [
          {
            key: 'city',
            type: 'input',
            props: {
              label: 'Mesto',
              placeholder: 'Mesto',
            }
          },
          {
            key: 'state',
            type: 'input',
            props: {
              label: 'Štát',
              placeholder: 'Štát',
            }
          },
          {
            key: 'zip',
            type: 'input',
            props: {
              label: 'PSČ',
              placeholder: 'PSČ',
            }
          },
        ]
      }
    ];
  }
}
