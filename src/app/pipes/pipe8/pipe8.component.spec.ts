import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe8Component } from './pipe8.component';

describe('Pipe8Component', () => {
  let component: Pipe8Component;
  let fixture: ComponentFixture<Pipe8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pipe8Component]
    });
    fixture = TestBed.createComponent(Pipe8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
