import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe3Component } from './pipe3.component';

describe('Pipe3Component', () => {
  let component: Pipe3Component;
  let fixture: ComponentFixture<Pipe3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pipe3Component]
    });
    fixture = TestBed.createComponent(Pipe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
