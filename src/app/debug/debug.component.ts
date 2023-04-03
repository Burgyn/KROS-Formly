import { Component, Input } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent {
  @Input() field: any;
  @Input() model: any;
}
