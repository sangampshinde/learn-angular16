import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cc4Component } from './cc4.component';

describe('Cc4Component', () => {
  let component: Cc4Component;
  let fixture: ComponentFixture<Cc4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cc4Component]
    });
    fixture = TestBed.createComponent(Cc4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
