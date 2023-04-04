import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { FormlyModule } from '@ngx-formly/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { CheckboxModule } from 'primeng/checkbox';
import { InvoicesEditComponent } from './invoices-edit/invoices-edit.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { FormlyDatepickerModule } from '@ngx-formly/primeng/datepicker';
import { DropdownModule } from 'primeng/dropdown';
import { CustomerFieldTypeComponent } from './customer-field-type/customer-field-type.component';
import { DebugComponent } from './debug/debug.component';
import { TabViewModule } from 'primeng/tabview';
import { GridComponent } from './grid/grid.component';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiscountComponent } from './discount/discount.component';
import { DiscountValueComponent } from './discount-value/discount-value.component';
import { DxInputComponent } from './dx-input/dx-input.component';
import { DevExtremeModule } from 'devextreme-angular';
import { DxFormFieldComponent } from './dx-form-field/dx-form-field.component';
import { DxGroupWrapperComponent } from './dx-group-wrapper/dx-group-wrapper.component';
import { DxSelectComponent } from './dx-select/dx-select.component';
import { DxColumnLayoutWrapperComponent } from './dx-column-layout-wrapper/dx-column-layout-wrapper.component';
import { DxGridComponent } from './dx-grid/dx-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    InvoicesEditComponent,
    InvoicesListComponent,
    CustomerFieldTypeComponent,
    DebugComponent,
    GridComponent,
    DiscountComponent,
    DiscountValueComponent,
    DxInputComponent,
    DxFormFieldComponent,
    DxGroupWrapperComponent,
    DxSelectComponent,
    DxColumnLayoutWrapperComponent,
    DxGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      wrappers: [
        { name: 'form-field', component: DxFormFieldComponent },
        { name: 'dx-group', component: DxGroupWrapperComponent },
      ],
      types: [
        { name: 'customer', component: CustomerFieldTypeComponent },
        { name: 'grid', component: GridComponent },
        { name: 'discount', component: DiscountComponent },
        { name: 'discountValue', component: DiscountValueComponent },
        { name: 'input', component: DxInputComponent, wrappers: ['form-field'] },
        { name: 'select', component: DxSelectComponent, wrappers: ['form-field'] },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            props: {
              type: 'number',
            },
          },
        },
        { name: 'dx-grid', component: DxGridComponent },
      ],
    }),
    FormlyPrimeNGModule,
    BrowserAnimationsModule,
    ToolbarModule,
    ButtonModule,
    MenubarModule,
    SidebarModule,
    ButtonModule,
    CheckboxModule,
    FormlyDatepickerModule,
    DropdownModule,
    TabViewModule,
    TableModule,
    DevExtremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
