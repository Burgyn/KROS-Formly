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
        if (p.type === undefined) {
            if (field.key === 'id') {
                p.type = 'number';
            } else {
                const key = field.key as string || 'id'; //ToDo: ja viem, ja viem :-D
                const prop = field.model[key];
                switch (typeof prop) {
                    case 'number':
                        p.type = 'number';
                        break;
                    case 'boolean':
                        field.type = 'checkbox';
                        break;
                    case 'string':
                        p.type = 'input';
                        break;
                    case 'object':
                        if (prop instanceof Date) {
                            p.type = 'date';
                        }
                        break;
                    default:
                        break;

                }
            }


            p['wasSet'] = true;
        }
    }
};
