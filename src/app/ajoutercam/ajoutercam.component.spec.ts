import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercamComponent } from './ajoutercam.component';

describe('AjoutercamComponent', () => {
  let component: AjoutercamComponent;
  let fixture: ComponentFixture<AjoutercamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutercamComponent]
    });
    fixture = TestBed.createComponent(AjoutercamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
