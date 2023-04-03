import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent extends FieldType<FieldTypeConfig> implements OnInit {
  ngOnInit() {
  }

  priceField(): any {
    return this.field.fieldGroup![0];
  }

  typeField(): any {
    return this.field.fieldGroup![1];
  }

  public static createField(key: string = 'discount', label: string = 'Discount', required: boolean = false): FormlyFieldConfig {
    return {
      key: key,
      type: 'discount',
      props: {
        label: label,
        placeholder: label,
        required: required,
      },
      fieldGroup: [
        {
          key: 'discount',
          type: 'input',
          props: {
            type: 'number',
          }
        },
        {
          key: 'type',
          type: 'select',
          props: {
            options: [
              { label: 'Percent', value: 'percent' },
              { label: 'Amount', value: 'amount' },
            ]
          }
        },
      ],
    };
  }
}
