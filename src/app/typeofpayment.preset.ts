import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ConfigOption, FormlyFieldConfig } from '@ngx-formly/core';

export const TYPE_OF_PAYMENTS = new InjectionToken<string[]>('TYPE_OF_PAYMENTS');

@Injectable()
export class TypeOfPaymentPresetProvider {
  constructor(@Inject(TYPE_OF_PAYMENTS) private typeOfPaymentsOptions: string[]) {}
  getConfiguration(): FormlyFieldConfig {
    return {
      key: 'typeOfPayment',
      type: 'select',
      props: {
        label: 'Typ platby',
        placeholder: 'Please Select',
        options: this.typeOfPaymentsOptions.map((typeOfPayment) => ({ label: typeOfPayment, value: typeOfPayment })),
      },
    };
  }
}

export function registerTypeOfPaymentPreset(salutationOptions: string[]): ConfigOption {
  return {
    presets: [
      {
        name: 'typeOfPayment',
        config: new TypeOfPaymentPresetProvider(salutationOptions),
      },
    ],
  };
}