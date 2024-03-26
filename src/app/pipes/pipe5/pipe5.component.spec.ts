import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe5Component } from './pipe5.component';

describe('Pipe5Component', () => {
  let component: Pipe5Component;
  let fixture: ComponentFixture<Pipe5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pipe5Component]
    });
    fixture = TestBed.createComponent(Pipe5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
