import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invoices-edit-json',
  template: `
<form [formGroup]="form">
    <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
</form>
  `,
  styleUrls: ['./invoices-edit-json.component.scss']
})
export class InvoicesEditJsonComponent implements OnInit {

  constructor(private dataService: DataService, private http: HttpClient) { }

  form = new FormGroup({});
  model = this.dataService.getInvoice(1);

  fields: FormlyFieldConfig[] = [];

  ngOnInit() {
    this.http
      .get<FormlyFieldConfig[]>('/assets/dynamic-form.json')
      .subscribe(fields => {
        this.fields = fields;
      });
  }
}
