import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';
import { FormlyFieldInput } from '@ngx-formly/primeng/input';

interface InputProps extends FormlyFieldProps {}

export interface FormlyInputFieldConfig extends FormlyFieldConfig<InputProps> {
  type: 'input' | Type<FormlyFieldInput>;
}

@Component({
  selector: 'app-dx-input',
  template: `
        <dx-text-box 
          *ngIf="props.type !== 'number' && props.type !== 'date'; else numberTmp"
          [formControl]="formControl"
          [formlyAttributes]="field">
        </dx-text-box>
        <ng-template #numberTmp>
          <dx-number-box 
            *ngIf="props.type !== 'date'; else dateTmp"
            [formControl]="formControl"
            [showSpinButtons]="true"
            [formlyAttributes]="field"></dx-number-box>
        </ng-template>
        <ng-template #dateTmp>
          <dx-date-box 
            type="date"
            [formControl]="formControl"
            [formlyAttributes]="field"></dx-date-box>
        </ng-template>
  `,
  styleUrls: ['./dx-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DxInputComponent extends FieldType<FieldTypeConfig<InputProps>> {

}
