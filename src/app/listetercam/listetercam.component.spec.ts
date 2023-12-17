import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetercamComponent } from './listetercam.component';

describe('ListetercamComponent', () => {
  let component: ListetercamComponent;
  let fixture: ComponentFixture<ListetercamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListetercamComponent]
    });
    fixture = TestBed.createComponent(ListetercamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
