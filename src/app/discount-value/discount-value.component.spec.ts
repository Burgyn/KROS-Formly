import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountValueComponent } from './discount-value.component';

describe('DiscountValueComponent', () => {
  let component: DiscountValueComponent;
  let fixture: ComponentFixture<DiscountValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
