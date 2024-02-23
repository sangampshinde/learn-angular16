import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Propertybinding3Component } from './propertybinding3.component';

describe('Propertybinding3Component', () => {
  let component: Propertybinding3Component;
  let fixture: ComponentFixture<Propertybinding3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Propertybinding3Component]
    });
    fixture = TestBed.createComponent(Propertybinding3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
