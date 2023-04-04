import { Component } from '@angular/core';
import { FieldArrayType, FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';

interface DxGridProps extends FormlyFieldProps {
  allowColumnResizing: boolean;
  showBorders: boolean;
  columnMinWidth: number;
  columnAutoWidth: boolean;
}

export interface DxGridFieldConfig extends FormlyFieldConfig<DxGridProps> {

}

@Component({
  selector: 'app-dx-grid',
  template: `
    <dx-data-grid
      id="gridContainer"
      [dataSource]="model"
      keyExpr="code"
      [showBorders]="to.showBorders"
      [allowColumnResizing]="to.allowColumnResizing"
      [columnMinWidth]="to.columnMinWidth"
      [columnAutoWidth]="to.columnAutoWidth"
      [formlyAttributes]="field"
    ></dx-data-grid>
  `,
  styleUrls: ['./dx-grid.component.scss']
})
export class DxGridComponent extends FieldArrayType<DxGridFieldConfig> {

}
