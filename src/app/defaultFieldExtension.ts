import { FormlyExtension } from '@ngx-formly/core';

function titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

export const defaultFieldExtension: FormlyExtension = {
    prePopulate(field): void {
        const p = field.props || {};

        if (field.type !== undefined ||
            (field.fieldGroup || []).length > 0 ||
            field.key === "id" ||
            !isNaN(Number(field.key)) ||
            p['wasSet']) {
            return;
        }

        field.type = 'input';

        if (p.label === undefined) {
            p.label = titleCaseWord(field.key as string);
        }

        //ToDo: chcelo by to nastavit props.type podla typu property v modely. 
        // ale to teraz uz nejdem riesit.

        p['wasSet'] = true;
    },
};
