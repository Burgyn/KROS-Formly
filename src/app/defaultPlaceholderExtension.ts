import { FormlyExtension } from '@ngx-formly/core';

export const defaultPlaceholderExtension: FormlyExtension = {
  prePopulate(field): void {
    if (field.props?.placeholder) {
      return;
    }

    let placeholder = field.props?.label;

    if (!placeholder) {
        placeholder = "Enter value";
    }

    field.props = {
      ...field.props,
      placeholder: placeholder,
    }
  },
};
