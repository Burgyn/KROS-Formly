import { Component, OnInit } from '@angular/core';
import { FieldArrayType, FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './customer-field-type.component.html',
  styleUrls: ['./customer-field-type.component.scss']
})
export class CustomerFieldTypeComponent extends FieldType<FieldTypeConfig> implements OnInit {

  customerFields: FormlyFieldConfig[] | undefined;

  ngOnInit() {

  }
}
