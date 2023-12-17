import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercamComponent } from './modifiercam.component';

describe('ModifiercamComponent', () => {
  let component: ModifiercamComponent;
  let fixture: ComponentFixture<ModifiercamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifiercamComponent]
    });
    fixture = TestBed.createComponent(ModifiercamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
