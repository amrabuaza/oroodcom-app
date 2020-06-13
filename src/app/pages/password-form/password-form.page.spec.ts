import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFormPage } from './password-form.page';

describe('PasswordFormPage', () => {
  let component: PasswordFormPage;
  let fixture: ComponentFixture<PasswordFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
