import { Component, OnInit } from '@angular/core';
import { FieldArrayType, FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';


interface GridProps extends FormlyFieldProps {
  columns: any[];
  header: string | undefined;
}

export interface FormlyGridFieldConfig extends FormlyFieldConfig<GridProps> {

}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent extends FieldArrayType<FormlyGridFieldConfig> implements OnInit {
  ngOnInit() {

  }

  getColumns(): any[] {
    return this.field.props?.columns || [];
  }
}
