import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Propertybinding2Component } from './propertybinding2.component';

describe('Propertybinding2Component', () => {
  let component: Propertybinding2Component;
  let fixture: ComponentFixture<Propertybinding2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Propertybinding2Component]
    });
    fixture = TestBed.createComponent(Propertybinding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
