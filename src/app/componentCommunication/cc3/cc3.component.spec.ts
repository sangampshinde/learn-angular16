import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cc3Component } from './cc3.component';

describe('Cc3Component', () => {
  let component: Cc3Component;
  let fixture: ComponentFixture<Cc3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cc3Component]
    });
    fixture = TestBed.createComponent(Cc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
