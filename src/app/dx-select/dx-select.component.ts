import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';
import { FormlyFieldSelectProps } from '@ngx-formly/core/select';
import { FormlyFieldSelect } from '@ngx-formly/primeng/select';

interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {}

export interface FormlySelectFieldConfig extends FormlyFieldConfig<SelectProps> {
  type: 'select' | Type<FormlyFieldSelect>;
}

@Component({
  selector: 'app-dx-select',
  template: `
    <dx-select-box [items]="items()" 
      [formControl]="formControl"
      [formlyAttributes]="field"
      displayExpr="label"
      valueExpr="value"
      (onChange)="props.change && props.change(field, $event)"></dx-select-box>
  `,
  styleUrls: ['./dx-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DxSelectComponent extends FieldType<FieldTypeConfig<SelectProps>> {

  items(): any[] {
    return this.props.options as any[];
  }
}
