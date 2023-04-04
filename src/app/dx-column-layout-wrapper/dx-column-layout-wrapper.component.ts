import { Component } from '@angular/core';

@Component({
  selector: 'app-dx-column-layout-wrapper',
  template: `
    <!-- Toto je tu nel pastnute, este som s tym nic nerobil -->
    <dx-box direction="row" width="100%" [height]="75">
      <dxi-item class="rect demo-dark" [ratio]="1"> ratio = 1 </dxi-item>
      <dxi-item class="rect demo-light" [ratio]="2"> ratio = 2 </dxi-item>
      <dxi-item class="rect demo-dark" [ratio]="1"> ratio = 1 </dxi-item>
    </dx-box>
  `,
  styleUrls: ['./dx-column-layout-wrapper.component.scss']
})
export class DxColumnLayoutWrapperComponent {

}
