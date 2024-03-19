import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise22Component } from './practise22.component';

describe('Practise22Component', () => {
  let component: Practise22Component;
  let fixture: ComponentFixture<Practise22Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practise22Component]
    });
    fixture = TestBed.createComponent(Practise22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
