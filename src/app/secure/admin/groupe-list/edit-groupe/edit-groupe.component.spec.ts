/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditGroupeComponent } from './edit-groupe.component';

describe('EditGroupeComponent', () => {
  let component: EditGroupeComponent;
  let fixture: ComponentFixture<EditGroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
