import { Component } from '@angular/core';
import { FieldWrapper, FormlyFieldConfig, FormlyFieldProps as CoreFormlyFieldProps } from '@ngx-formly/core';

export interface FormlyFieldProps extends CoreFormlyFieldProps  {
  hideRequiredMarker?: boolean;
  hideLabel?: boolean;
}


@Component({
  selector: 'app-dx-form-field',
  template: `
    <div class="dx-field">
      <div class="dx-field-label" *ngIf="props.label && props.hideLabel !== true">{{props.label}}</div>
      <div class="dx-field-value">
        <ng-container #fieldComponent></ng-container>
        <small *ngIf="showError" class="p-error">
          <formly-validation-message class="ui-message-text" [field]="field"></formly-validation-message>
        </small>
      </div>
    </div>
  `,
  styleUrls: ['./dx-form-field.component.scss']
})
export class DxFormFieldComponent extends FieldWrapper<FormlyFieldConfig<FormlyFieldProps>> {

}
