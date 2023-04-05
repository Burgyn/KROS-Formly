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
      bankInfo:{
        name: 'Slovenská sporiteľňa, a.s.',
        code: 'SK1234567890',
        currency: 'EUR',
      },
      typeOfPayment: 'cash',
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
    return of(this.getBankAccounts()
      .filter(bankAccount => bankAccount.currency === currency))
  }

  getPartners() {
    return of([
      { id: 1, name: 'John Doe', email: 'johndoe1@gmail.com', phone: '+421 123 456 789', address: '1234 Street', city: 'New York', state: 'NY', zip: '10001', bankAccount: 'US1234567890' },
      { id: 2, name: 'Jane Smith', email: 'janesmith2@gmail.com', phone: '+421 234 567 890', address: '2345 Street', city: 'Los Angeles', state: 'CA', zip: '90001', bankAccount: 'US2345678901' },
      { id: 3, name: 'Michael Brown', email: 'michaelbrown3@gmail.com', phone: '+421 345 678 901', address: '3456 Street', city: 'Chicago', state: 'IL', zip: '60601', bankAccount: 'US3456789012' },
      { id: 4, name: 'Emily Johnson', email: 'emilyjohnson4@gmail.com', phone: '+421 456 789 012', address: '4567 Street', city: 'Houston', state: 'TX', zip: '77001', bankAccount: 'US4567890123' },
      { id: 5, name: 'William Davis', email: 'williamdavis5@gmail.com', phone: '+421 567 890 123', address: '5678 Street', city: 'Philadelphia', state: 'PA', zip: '19019', bankAccount: 'US5678901234' },
      { id: 6, name: 'Elizabeth Miller', email: 'elizabethmiller6@gmail.com', phone: '+421 678 901 234', address: '6789 Street', city: 'Phoenix', state: 'AZ', zip: '85001', bankAccount: 'US6789012345' },
      { id: 7, name: 'David Wilson', email: 'davidwilson7@gmail.com', phone: '+421 789 012 345', address: '7890 Street', city: 'San Antonio', state: 'TX', zip: '78201', bankAccount: 'US7890123456' },
      { id: 8, name: 'Samantha Moore', email: 'samanthamoore8@gmail.com', phone: '+421 890 123 456', address: '8901 Street', city: 'San Diego', state: 'CA', zip: '92101', bankAccount: 'US8901234567' },
      { id: 9, name: 'James Taylor', email: 'jamestaylor9@gmail.com', phone: '+421 901 234 567', address: '9012 Street', city: 'Dallas', state: 'TX', zip: '75201', bankAccount: 'US9012345678' },
      { id: 10, name: 'Jessica Anderson', email: 'jessicaanderson10@gmail.com', phone: '+421 012 345 678', address: '1012 Street', city: 'San Jose', state: 'CA', zip: '95101', bankAccount: 'US0123456789' },
      { id: 21, name: 'Oliver Harris', email: 'oliverharris21@gmail.com', phone: '+421 210 987 654', address: '2109 Street', city: 'Seattle', state: 'WA', zip: '98101', bankAccount: 'US2109876543' },
      { id: 22, name: 'Ethan Clark', email: 'ethanclark22@gmail.com', phone: '+421 221 098 765', address: '2210 Street', city: 'Denver', state: 'CO', zip: '80201', bankAccount: 'US2210987654' },
      { id: 23, name: 'Ava Lewis', email: 'avalewis23@gmail.com', phone: '+421 232 109 876', address: '2311 Street', city: 'Boston', state: 'MA', zip: '02101', bankAccount: 'US2321098765' },
      { id: 24, name: 'Mia Young', email: 'miayoung24@gmail.com', phone: '+421 243 210 987', address: '2412 Street', city: 'Atlanta', state: 'GA', zip: '30301', bankAccount: 'US2432109876' },
      { id: 25, name: 'Charlotte Hall', email: 'charlottehall25@gmail.com', phone: '+421 254 321 098', address: '2513 Street', city: 'Miami', state: 'FL', zip: '33101', bankAccount: 'US2543210987' },
      { id: 26, name: 'Amelia Ward', email: 'ameliaward26@gmail.com', phone: '+421 265 432 109', address: '2614 Street', city: 'Raleigh', state: 'NC', zip: '27601', bankAccount: 'US2654321098' },
      { id: 27, name: 'Harper Turner', email: 'harperturner27@gmail.com', phone: '+421 276 543 210', address: '2715 Street', city: 'Nashville', state: 'TN', zip: '37201', bankAccount: 'US2765432109' },
      { id: 28, name: 'Evelyn Morris', email: 'evelynmorris28@gmail.com', phone: '+421 287 654 321', address: '2816 Street', city: 'New Orleans', state: 'LA', zip: '70112', bankAccount: 'US2876543210' },
      { id: 29, name: 'Abigail Carter', email: 'abigailcarter29@gmail.com', phone: '+421 298 765 432', address: '2917 Street', city: 'Indianapolis', state: 'IN', zip: '46201', bankAccount: 'US2987654321' },
      { id: 30, name: 'Emily Phillips', email: 'emilyphillips30@gmail.com', phone: '+421 309 876 543', address: '3018 Street', city: 'Columbus', state: 'OH', zip: '43085', bankAccount: 'US3098765432' }
    ]);
  }
}
