import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-dx-group-wrapper',
  template: `
    <div class="dx-fieldset">
      <div class="dx-fieldset-header">{{ props.label }}</div>
      <ng-container #fieldComponent></ng-container>
    </div>
  `,
  styleUrls: ['./dx-group-wrapper.component.scss']
})
export class DxGroupWrapperComponent extends FieldWrapper {

}
