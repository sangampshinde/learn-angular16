import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cc5Component } from './cc5.component';

describe('Cc5Component', () => {
  let component: Cc5Component;
  let fixture: ComponentFixture<Cc5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cc5Component]
    });
    fixture = TestBed.createComponent(Cc5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
