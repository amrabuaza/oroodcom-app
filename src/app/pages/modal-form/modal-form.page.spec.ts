import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormPage } from './modal-form.page';

describe('ModalFormPage', () => {
  let component: ModalFormPage;
  let fixture: ComponentFixture<ModalFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
