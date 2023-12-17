import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListermessionComponent } from './listermession.component';

describe('ListermessionComponent', () => {
  let component: ListermessionComponent;
  let fixture: ComponentFixture<ListermessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListermessionComponent]
    });
    fixture = TestBed.createComponent(ListermessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
