import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise4Component } from './practise4.component';

describe('Practise4Component', () => {
  let component: Practise4Component;
  let fixture: ComponentFixture<Practise4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise4Component]
    });
    fixture = TestBed.createComponent(Practise4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
