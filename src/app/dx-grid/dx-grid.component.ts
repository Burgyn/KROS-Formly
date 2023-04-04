import { Component } from '@angular/core';
import { FieldArrayType, FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';

interface DxGridProps extends FormlyFieldProps {
  columns: any[];
  header: string | undefined;
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
      [showBorders]="true"
    ></dx-data-grid>
  `,
  styleUrls: ['./dx-grid.component.scss']
})
export class DxGridComponent extends FieldArrayType<DxGridFieldConfig> {

}
