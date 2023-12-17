import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierchaufComponent } from './modifierchauf.component';

describe('ModifierchaufComponent', () => {
  let component: ModifierchaufComponent;
  let fixture: ComponentFixture<ModifierchaufComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierchaufComponent]
    });
    fixture = TestBed.createComponent(ModifierchaufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
