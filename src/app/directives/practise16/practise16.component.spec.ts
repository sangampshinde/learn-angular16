import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise16Component } from './practise16.component';

describe('Practise16Component', () => {
  let component: Practise16Component;
  let fixture: ComponentFixture<Practise16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise16Component]
    });
    fixture = TestBed.createComponent(Practise16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
