import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventbinding1Component } from './eventbinding1.component';

describe('Eventbinding1Component', () => {
  let component: Eventbinding1Component;
  let fixture: ComponentFixture<Eventbinding1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eventbinding1Component]
    });
    fixture = TestBed.createComponent(Eventbinding1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
