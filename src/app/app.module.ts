import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { FORMLY_CONFIG, FormlyModule } from '@ngx-formly/core';
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
import { FormlyPresetModule } from '@ngx-formly/core/preset';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { registerTypeOfPaymentPreset, TYPE_OF_PAYMENTS } from './typeofpayment.preset';
import {defaultPlaceholderExtension} from './defaultPlaceholderExtension';
import { DependentOptionsExtension } from './DependentOptionsExtension';
import { defaultFieldExtension } from './defaultFieldExtension';
import { InvoicesEditJsonComponent } from './invoices-edit-json/invoices-edit-json.component';
import { HttpClientModule } from '@angular/common/http';


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
    DxGridComponent,
    InvoicesEditJsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyPresetModule,
    FormlySelectModule,
    HttpClientModule,
    FormlyModule.forRoot({
      presets: [
        {
          name: 'name',
          config: {
            key: 'name',
            type: 'input',
            props: {
              label: 'Názov',
              required: true,
            },
          },
        },
        {
          name: 'address',
          config: {
            key: 'address',
            type: 'input',
            props: {
              label: 'Adresa',
              placeholder: '(Čislo, Ulica)'
            },
          },
        },
        {
          name: 'email',
          config: {
            key: 'email',
            type: 'input',
            props: {
              label: 'Email',
              placeholder: 'Email',
            },
          },
        }
      ],
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
      extensions: [
        {
          name: 'default-placeholder',
          extension: defaultPlaceholderExtension
        },
        {
          name: 'dependsOn',
          extension: DependentOptionsExtension
        },
        {
          name: 'default-field',
          extension: defaultFieldExtension
        }
      ]
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
  providers: [
    {
      provide: TYPE_OF_PAYMENTS,
      useValue: ['cash', 'transfer', 'card', 'other'],
    },
    {
      provide: FORMLY_CONFIG,
      useFactory: registerTypeOfPaymentPreset,
      deps: [TYPE_OF_PAYMENTS],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
