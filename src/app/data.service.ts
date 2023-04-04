import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCurrencies() {
    return [
      { name: 'US Dollar', code: 'USD' },
      { name: 'Euro', code: 'EUR' },
      { name: 'British Pound', code: 'GBP' },
      { name: 'Russian Ruble', code: 'RUB' },
      { name: 'Japanese Yen', code: 'JPY' },
      { name: 'Chinese Yuan', code: 'CNY' },
      { name: 'Swiss Franc', code: 'CHF' },
      { name: 'Canadian Dollar', code: 'CAD' },
      { name: 'Australian Dollar', code: 'AUD' },
      { name: 'Swedish Krona', code: 'SEK' },
      { name: 'New Zealand Dollar', code: 'NZD' },
      { name: 'South African Rand', code: 'ZAR' },
      { name: 'Mexican Peso', code: 'MXN' },
      { name: 'Norwegian Krone', code: 'NOK' },
      { name: 'Turkish Lira', code: 'TRY' },
      { name: 'Hong Kong Dollar', code: 'HKD' },
      { name: 'South Korean Won', code: 'KRW' },
      { name: 'Singapore Dollar', code: 'SGD' },
      { name: 'Indian Rupee', code: 'INR' },
      { name: 'Brazilian Real', code: 'BRL' },
      { name: 'Polish Zloty', code: 'PLN' },
      { name: 'Danish Krone', code: 'DKK' },
      { name: 'Czech Koruna', code: 'CZK' },
    ];
  }

  getBankAccounts() {
    return of([
      { name: 'Slovenská sporiteľňa, a.s.', code: 'SK1234567890', currency: 'EUR' },
      { name: 'ČOSB, a.s.', code: 'CZ1234567890', currency: 'EUR'},

      { name: 'Česká spořitelna, a.s.', code: 'CZ1234567890', currency: 'CZK' },
      { name: 'Bank of America, a.s.', code: 'US1234567890', currency: 'USD' },
    ]);
  }
}
