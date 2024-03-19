import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParctiseComponent } from './parctise.component';

describe('ParctiseComponent', () => {
  let component: ParctiseComponent;
  let fixture: ComponentFixture<ParctiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParctiseComponent]
    });
    fixture = TestBed.createComponent(ParctiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
