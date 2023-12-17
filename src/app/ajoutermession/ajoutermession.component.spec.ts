import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermessionComponent } from './ajoutermession.component';

describe('AjoutermessionComponent', () => {
  let component: AjoutermessionComponent;
  let fixture: ComponentFixture<AjoutermessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutermessionComponent]
    });
    fixture = TestBed.createComponent(AjoutermessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
