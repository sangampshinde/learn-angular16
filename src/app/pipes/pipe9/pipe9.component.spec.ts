import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe9Component } from './pipe9.component';

describe('Pipe9Component', () => {
  let component: Pipe9Component;
  let fixture: ComponentFixture<Pipe9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pipe9Component]
    });
    fixture = TestBed.createComponent(Pipe9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
