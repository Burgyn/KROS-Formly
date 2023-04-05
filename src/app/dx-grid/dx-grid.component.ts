import { Component } from '@angular/core';
import {
  FieldArrayType,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core';
import { Column } from 'devextreme/ui/data_grid';

interface DxGridProps extends FormlyFieldProps {
  allowColumnResizing: boolean;
  columnAutoWidth: boolean;
  columnMinWidth: number;
  keyExpr: string;
  showBorders: boolean;
  columns: Column[];
}

export interface DxGridFieldConfig extends FormlyFieldConfig<DxGridProps> {}

@Component({
  selector: 'app-dx-grid',
  template: `
    <dx-data-grid
      id="gridContainer"
      [dataSource]="model"
      [keyExpr]="to.keyExpr"
      [showBorders]="to.showBorders"
      [allowColumnResizing]="to.allowColumnResizing"
      [columnMinWidth]="to.columnMinWidth"
      [columnAutoWidth]="to.columnAutoWidth"
      [formlyAttributes]="field"
      [columns]="to.columns"
    ></dx-data-grid>
  `,
  styleUrls: ['./dx-grid.component.scss'],
})
export class DxGridComponent extends FieldArrayType<DxGridFieldConfig> {}
