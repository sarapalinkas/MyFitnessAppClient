import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkoutgoalComponent } from './add-workoutgoal.component';

describe('AddWorkoutgoalComponent', () => {
  let component: AddWorkoutgoalComponent;
  let fixture: ComponentFixture<AddWorkoutgoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorkoutgoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkoutgoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
