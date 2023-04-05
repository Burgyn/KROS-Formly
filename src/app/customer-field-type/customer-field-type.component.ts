import { Component, OnInit } from '@angular/core';
import { FieldArrayType, FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';
import { DxGroupWrapperComponent } from '../dx-group-wrapper/dx-group-wrapper.component';
import { DataService } from '../data.service';
import { AbstractControl } from '@angular/forms';

interface CustomerProps extends FormlyFieldProps {
  allowPartnerSelection: boolean;
}

export interface CustomerFieldConfig extends FormlyFieldConfig<CustomerProps> {

}

@Component({
  templateUrl: './customer-field-type.component.html',
  styleUrls: ['./customer-field-type.component.scss']
})
export class CustomerFieldTypeComponent extends FieldType<CustomerFieldConfig> implements OnInit {

  fields: FormlyFieldConfig[] = [];

  ngOnInit() {
    //ToDo: prerobit to tak aby sa zoznam fieldov vytvaral tu a nie v createField

    const id: FormlyFieldConfig = this.props.allowPartnerSelection ?
      {
        key: 'id',
        type: 'select',
        props: {
          displayExpr: 'name',
          valueExpr: 'id',
          searchEnabled: true,
          label: 'Partner',
          options: this.dataService.getPartners(),
          change: (field, $event) => {
            if ($event.selectedItem) {
              //ToDO: keby som sa pohral so strukturou fieldov tak by som to mohol patchnut jednym prikazom
              //field.form?.patchValue($event.selectedItem);
              field.form?.get('name')?.patchValue($event.selectedItem.name);
              field.form?.get('address')?.patchValue($event.selectedItem.address);
              field.form?.get('city')?.patchValue($event.selectedItem.city);
              field.form?.get('zip')?.patchValue($event.selectedItem.zip);
              field.form?.get('email')?.patchValue($event.selectedItem.email);
              field.form?.get('state')?.patchValue($event.selectedItem.state);

              // ToDo: Mal by som to byt schopny spravit aj takto:
              // miesto toho aby som pocuval na zmenu, viem to spraviť aj deklaratívne na úrovni fieldu
              // {
              //   key: 'name',
              //   type: 'input',
              //   props: {
              //     label: 'Názov',
              //   },
              //   expressionProperties: {
              //     'model.name': 'model.selectedPartner ? || {}).name : null',
              //   },
              // },
            }
          }
        }
      } : {
        key: 'id'
      };
    this.fields = [
      id,
      {
        fieldGroup: this.field.fieldGroup
      }
    ];
  }

  constructor(private dataService: DataService) {
    super();
  }

  get newOptions() {
    return { ...this.options };
  }

  get formlyGroup(): any {
    if (this.field.formControl) {
      return this.field.formControl;
    } else {
      return this.form;
    }
  }

  public static createField(key: string = 'customer', label: string = 'Customer',
    required: boolean = false, fields: FormlyFieldConfig[] | undefined = undefined,
    allowPartnerSelection: boolean = true): FormlyFieldConfig {
    const f = fields ? fields : CustomerFieldTypeComponent.createDefaultFields();
    return {
      key: key,
      type: 'customer',
      wrappers: ['dx-group'],
      className: 'flex-1',
      props: {
        label: label,
        placeholder: label,
        required: required,
        allowPartnerSelection: allowPartnerSelection
      },
      fieldGroup: [
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
