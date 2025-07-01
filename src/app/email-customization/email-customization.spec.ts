import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCustomization } from './email-customization';

describe('EmailCustomization', () => {
  let component: EmailCustomization;
  let fixture: ComponentFixture<EmailCustomization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailCustomization]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailCustomization);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
