import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise21Component } from './practise21.component';

describe('Practise21Component', () => {
  let component: Practise21Component;
  let fixture: ComponentFixture<Practise21Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise21Component]
    });
    fixture = TestBed.createComponent(Practise21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
