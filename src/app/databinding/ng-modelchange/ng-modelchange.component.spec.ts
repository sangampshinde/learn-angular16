import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelchangeComponent } from './ng-modelchange.component';

describe('NgModelchangeComponent', () => {
  let component: NgModelchangeComponent;
  let fixture: ComponentFixture<NgModelchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgModelchangeComponent]
    });
    fixture = TestBed.createComponent(NgModelchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
