import { FormlyExtension, FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

export const DependentOptionsExtension : FormlyExtension = {
    onPopulate(field: FormlyFieldConfig) {
        const p = field.props || {};
        // console.log('DependentOptionsExtension: dependsOnField - ' + p['dependsOn']);
        if (!p['_wasInit'] && p['dependsOn']) {
            const dependsOn = p['dependsOn'];
            const dependsOnField = field.form?.get(dependsOn);

            // console.log('DependentOptionsExtension: dependsOnField', dependsOnField);
            // if (dependsOnField) {

            //     const dp = dependsOnField.fie.props || {};
            // }

            p['_wasInit'] = true;
        }
    }
}