import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cc6Component } from './cc6.component';

describe('Cc6Component', () => {
  let component: Cc6Component;
  let fixture: ComponentFixture<Cc6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cc6Component]
    });
    fixture = TestBed.createComponent(Cc6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
