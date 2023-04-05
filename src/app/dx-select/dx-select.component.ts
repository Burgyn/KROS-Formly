import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';
import { FormlyFieldSelectProps } from '@ngx-formly/core/select';
import { FormlyFieldSelect } from '@ngx-formly/primeng/select';
import { Observable } from 'rxjs';

interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
  displayExpr: string;
  valueExpr: string;
  searchEnabled: boolean;
}

export interface FormlySelectFieldConfig extends FormlyFieldConfig<SelectProps> {
  type: 'select' | Type<FormlyFieldSelect>;  
}
// ToDo: Oni tu pouzivaju formlySelectOptions pipe, [options]="props.options | formlySelectOptions : field | async"
// ale ja tym ze chcem konfigurovat displayExpr a valueExpr tak to nejde
@Component({
  selector: 'app-dx-select',
  template: `
    <dx-select-box [items]="(items() | async) ?? []"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [searchEnabled]="props.searchEnabled || false"
      displayExpr="{{props.displayExpr || 'label'}}"
      valueExpr="{{props.valueExpr || 'value'}}"
      (onSelectionChanged)="props.change && props.change(field, $event)"
      ></dx-select-box>
  `,
  styleUrls: ['./dx-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DxSelectComponent extends FieldType<FieldTypeConfig<SelectProps>> {

  items(): Observable<any> {
    if (this.props.options instanceof Array)
      return new Observable((observer) => {
        observer.next(this.props.options);
      });
    return this.props.options as Observable<any>;
  }
}
