import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getInvoice(invoiceId: number) {
    return {
      id: invoiceId,
      number: 'OF 20230001',
      date: '2021-01-01',
      dueDate: '2021-01-31',
      customer: {
        id: 1,
        name: 'John Doe',
        address: '123 Main St.',
        email: 'john.doe@gmail.com',
        city: 'New York',
        state: 'NY',
        zip: '10001'
      },
      supplier: {
        id: 2,
        name: 'Acme Inc.',
        address: '123 Main St.',
        email: 'acme@someone.com',
        city: 'New York',
        state: 'NY',
        zip: '10001'
      },
      items: [
        { code: 'TB001', description: 'Modern wooden kitchen table', quantity: 1, price: 21.00, tax: 0.21, total: 25.41, discount: 0.00 },
        { code: 'TB002', description: 'Comfortable upholstered dining chair', quantity: 2, price: 15.00, tax: 0.21, total: 36.30, discount: 0.00 },
        { code: 'TB003', description: 'Three-seater fabric couch', quantity: 1, price: 150.00, tax: 0.21, total: 181.50, discount: 0.00 },
        { code: 'TB004', description: 'Glass-top coffee table with metal frame', quantity: 1, price: 50.00, tax: 0.21, total: 60.50, discount: 0.00 },
        { code: 'TB005', description: 'Contemporary TV stand with storage', quantity: 1, price: 75.00, tax: 0.21, total: 90.75, discount: 0.00 },
        { code: 'TB006', description: 'Tall wooden bookshelf with adjustable shelves', quantity: 1, price: 80.00, tax: 0.21, total: 96.80, discount: 0.00 },
        { code: 'TB007', description: 'Home office desk with drawers', quantity: 1, price: 100.00, tax: 0.21, total: 121.00, discount: 0.00 },
        { code: 'TB008', description: 'Ergonomic office chair with lumbar support', quantity: 1, price: 45.00, tax: 0.21, total: 54.45, discount: 0.00 },
        { code: 'TB009', description: 'Queen-sized bed frame with headboard', quantity: 1, price: 120.00, tax: 0.21, total: 145.20, discount: 0.00 },
        { code: 'TB010', description: 'Memory foam mattress', quantity: 1, price: 200.00, tax: 0.21, total: 242.00, discount: 0.00 },
        { code: 'TB011', description: 'Matching wooden nightstand with drawer', quantity: 2, price: 30.00, tax: 0.21, total: 72.60, discount: 0.00 },
        { code: 'TB012', description: 'Large sliding-door wardrobe with mirror', quantity: 1, price: 250.00, tax: 0.21, total: 302.50, discount: 0.00 },
        { code: 'TB013', description: 'Six-drawer wooden dresser', quantity: 1, price: 180.00, tax: 0.21, total: 217.80, discount: 0.00 },
        { code: 'TB014', description: 'Mobile drawer unit on casters', quantity: 1, price: 40.00, tax: 0.21, total: 48.40, discount: 0.00 },     
      ],
      terms: 'No returns or refunds.',
      notes: 'Thank you for your business.',
      total: 25.00,
      paid: false,
      currency: 'USD',
      bankAccount: 'SK1234567890',
      discount: {
        allowed: true,
        discount: 10,
        type: 'percent'
      }
    };
  }

  getCurrencies() {
    return of([
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
    ]);
  }

  getBankAccounts() {
    return [
      { name: 'Slovenská sporiteľňa, a.s.', code: 'SK1234567890', currency: 'EUR' },
      { name: 'Bank of America Corp.', code: 'US0987654321', currency: 'USD' },
      { name: 'Barclays Bank PLC', code: 'GB9876543210', currency: 'GBP' },
      { name: 'Deutsche Bank AG', code: 'DE1230987654', currency: 'EUR' },
      { name: 'Bank of China Ltd.', code: 'CN5678901234', currency: 'CNY' },
      { name: 'Reserve Bank of Australia', code: 'AU1234987600', currency: 'AUD' },
      { name: 'Credit Suisse Group AG', code: 'CH2345678901', currency: 'CHF' },
      { name: 'Sumitomo Mitsui Banking Corporation', code: 'JP2340987650', currency: 'JPY' },
      { name: 'Royal Bank of Canada', code: 'CA9876543210', currency: 'CAD' },
      { name: 'Banco do Brasil S.A.', code: 'BR1234567890', currency: 'BRL' },
      { name: 'Sberbank of Russia', code: 'RU1230987654', currency: 'RUB' },
      { name: 'State Bank of India', code: 'IN2345678901', currency: 'INR' },
      { name: 'Nedbank Limited', code: 'ZA9876543210', currency: 'ZAR' },
      { name: 'Banco Nacional de México, S.A.', code: 'MX1234567890', currency: 'MXN' },
      { name: 'Bank Negara Malaysia', code: 'MY2345678901', currency: 'MYR' },
      { name: 'Bank of New Zealand', code: 'NZ9876543210', currency: 'NZD' },
      { name: 'Nordea Bank Abp', code: 'FI1230987654', currency: 'EUR' },
      { name: 'Bank Central Asia Tbk', code: 'ID1234567890', currency: 'IDR' },
      { name: 'Bank of the Philippine Islands', code: 'PH2345678901', currency: 'PHP' },
      { name: 'ING Groep N.V.', code: 'NL1234567890', currency: 'EUR' },
      { name: 'JPMorgan Chase & Co.', code: 'US1230987654', currency: 'USD' },
      { name: 'BNP Paribas S.A.', code: 'FR2345678901', currency: 'EUR' },
      { name: 'Wells Fargo & Co.', code: 'US9876543210', currency: 'USD' },
      { name: 'UniCredit S.p.A.', code: 'IT1234567890', currency: 'EUR' },
      { name: 'Citigroup Inc.', code: 'US2345678901', currency: 'USD' },
      { name: 'Société Générale S.A.', code: 'FR1230987654', currency: 'EUR' },
      { name: 'Bank of Ireland Group', code: 'IE2345678901', currency: 'EUR' },
      { name: 'Commerzbank AG', code: 'DE9876543210', currency: 'EUR' },
      { name: 'Goldman Sachs Group, Inc.', code: 'US1234567890', currency: 'USD' },
      { name: 'BBVA (Banco Bilbao Vizcaya Argentaria)', code: 'ES2345678901', currency: 'EUR' },
      { name: 'Morgan Stanley', code: 'US9876543210', currency: 'USD' },
      { name: 'Raiffeisen Bank International AG', code: 'AT1230987654', currency: 'EUR' },
      { name: 'The Bank of New York Mellon Corporation', code: 'US2340987650', currency: 'USD' },
      { name: 'DZ Bank AG', code: 'DE1234567890', currency: 'EUR' },
      { name: 'U.S. Bancorp', code: 'US5678901234', currency: 'USD' },
      { name: 'Erste Group Bank AG', code: 'AT9876543210', currency: 'EUR' },
      { name: 'PNC Financial Services Group, Inc.', code: 'US1234987600', currency: 'USD' },
      { name: 'CaixaBank, S.A.', code: 'ES2345678901', currency: 'EUR' },
      { name: 'Capital One Financial Corporation', code: 'US9876543210', currency: 'USD' },
      { name: 'KBC Bank NV', code: 'BE1234567890', currency: 'EUR' }
    ];
  }

  getBankAccountByCurrency(currency: string) {
    return of (this.getBankAccounts()
      .filter(bankAccount => bankAccount.currency === currency))
  }
}
