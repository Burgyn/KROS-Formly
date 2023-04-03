import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-discount-value',
  templateUrl: './discount-value.component.html',
  styleUrls: ['./discount-value.component.scss']
})
export class DiscountValueComponent extends FieldType<FieldTypeConfig>{

}
