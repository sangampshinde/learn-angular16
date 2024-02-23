import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Propertybinding1Component } from './propertybinding1.component';

describe('Propertybinding1Component', () => {
  let component: Propertybinding1Component;
  let fixture: ComponentFixture<Propertybinding1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Propertybinding1Component]
    });
    fixture = TestBed.createComponent(Propertybinding1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
