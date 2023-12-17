import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterchaufComponent } from './ajouterchauf.component';

describe('AjouterchaufComponent', () => {
  let component: AjouterchaufComponent;
  let fixture: ComponentFixture<AjouterchaufComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterchaufComponent]
    });
    fixture = TestBed.createComponent(AjouterchaufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
