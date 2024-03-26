import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe6Component } from './pipe6.component';

describe('Pipe6Component', () => {
  let component: Pipe6Component;
  let fixture: ComponentFixture<Pipe6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pipe6Component]
    });
    fixture = TestBed.createComponent(Pipe6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
