import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise5Component } from './practise5.component';

describe('Practise5Component', () => {
  let component: Practise5Component;
  let fixture: ComponentFixture<Practise5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise5Component]
    });
    fixture = TestBed.createComponent(Practise5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
