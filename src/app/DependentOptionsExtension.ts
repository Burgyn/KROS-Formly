import { FormlyExtension, FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { JsonPipe } from '@angular/common';

export const DependentOptionsExtension: FormlyExtension = {
    onPopulate(field: FormlyFieldConfig) {
        const p = field.props || {};
        // console.log('DependentOptionsExtension: dependsOnField - ' + p['dependsOn'] + '  ' + p.label);
        if (!p['_wasInit'] && p['dependsOn']) {
            const dependsOn = p['dependsOn'];
            const dependsOnField = field?.parent?.fieldGroup?.find(f => f.key === dependsOn);
            if (dependsOnField) {
                const dp = dependsOnField.props || {};
                dp.change = (f, $event) => {
                    for (let f of field?.fieldGroup || []) {
                        if (f.key) {
                            f.form?.get(f.key as string)?.patchValue($event.selectedItem[f.key as string]);
                        }
                    }
                }
                p['_wasInit'] = true;
            }
        }
    }
}