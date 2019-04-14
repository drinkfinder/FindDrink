import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkRowComponent } from './drink-row.component';

describe('DrinkRowComponent', () => {
  let component: DrinkRowComponent;
  let fixture: ComponentFixture<DrinkRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
