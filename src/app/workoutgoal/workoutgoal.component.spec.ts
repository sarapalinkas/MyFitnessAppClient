import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutgoalComponent } from './workoutgoal.component';

describe('WorkoutgoalComponent', () => {
  let component: WorkoutgoalComponent;
  let fixture: ComponentFixture<WorkoutgoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutgoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutgoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
