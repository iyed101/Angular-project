import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerchaufComponent } from './listerchauf.component';

describe('ListerchaufComponent', () => {
  let component: ListerchaufComponent;
  let fixture: ComponentFixture<ListerchaufComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerchaufComponent]
    });
    fixture = TestBed.createComponent(ListerchaufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
