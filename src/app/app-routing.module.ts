import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { InvoicesEditComponent } from './invoices-edit/invoices-edit.component';
import { InvoicesEditJsonComponent } from './invoices-edit-json/invoices-edit-json.component';

const routes: Routes = [
  { path: '', component: InvoicesListComponent },
  { path: 'invoices', component: InvoicesListComponent },
  { path: 'invoices/:id', component: InvoicesEditComponent },
  { path: 'invoicesjson', component: InvoicesEditJsonComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
