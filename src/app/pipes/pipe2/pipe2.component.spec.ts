import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe2Component } from './pipe2.component';

describe('Pipe2Component', () => {
  let component: Pipe2Component;
  let fixture: ComponentFixture<Pipe2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pipe2Component]
    });
    fixture = TestBed.createComponent(Pipe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
