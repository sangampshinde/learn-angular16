import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe7Component } from './pipe7.component';

describe('Pipe7Component', () => {
  let component: Pipe7Component;
  let fixture: ComponentFixture<Pipe7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pipe7Component]
    });
    fixture = TestBed.createComponent(Pipe7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
