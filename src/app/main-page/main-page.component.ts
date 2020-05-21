import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { CalendarView, CalendarEvent, CalendarMonthViewBeforeRenderEvent, CalendarWeekViewBeforeRenderEvent, CalendarViewPeriod } from 'angular-calendar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddGoalDialogComponent } from './add-goal-dialog/add-goal-dialog.component';
import { WorkoutGoal } from '../model/workout.model';
import { HttpClientService } from '../service/http-client.service';
import { NatureGoal } from '../model/nature.model';
import { MeditationGoal } from '../model/meditation.model';
import { FruitGoal } from '../model/fruit.model';
import { VegGoal } from '../model/veg.model';
import { SleepGoal } from '../model/sleep.model';
import { AddActivityDialogComponent } from './add-activity-dialog/add-activity-dialog.component';
import { Activity } from '../model/activity.model';
import { Subject } from 'rxjs';
import { AddDailyActComponent } from './add-daily-act/add-daily-act.component';

export interface DialogData {
  quantity: string;
  frequency: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  workout: WorkoutGoal;
  nature: NatureGoal;
  meditation: MeditationGoal;
  fruit: FruitGoal;
  veg: VegGoal;
  sleep: SleepGoal;

  chosenAct: string;
  current_act: Array<Activity> = [];
  items: Array<CalendarEvent<{ time: any }>> = [];
  activities = ["Sleep", "Fruit", "Vegetable"];
  quantity: number;
  act_quantity: number;
  frequency: number;
  view: CalendarView = CalendarView.Week;
  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();
  CalendarView = CalendarView;
  period: CalendarViewPeriod;
  viewDate: Date = new Date();
  constructor(public dialog: MatDialog,
    private httpClientService: HttpClientService,
    private zone: NgZone,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getWorkoutgoal();
    this.getFruitgoal();
    this.getNaturegoal();
    this.getSleepgoal();
    this.getVeggoal();
    this.getMeditationgoal();
    this.goals;

    this.httpClientService.getActivities("Nature").subscribe(
      act => 
      {
        if(act)
        {
          
        this.current_act = act.slice();

        }
        this.current_act.forEach((act) =>
      {
        if(act.time != null)
        {
          this.items.push({
            title: act.goalType,
            start: new Date(act.time),
          })
        }
      });
      });
    
    this.httpClientService.getActivities("Workout").subscribe(
      act => 
      {
        if(act)
        {
          
        this.current_act = act.slice();

        }
        this.current_act.forEach((act) =>
      {
        if(act.time != null)
        {
          this.items.push({
            title: act.goalType,
            start: new Date(act.time),
          })
        }
      });
      });
      this.httpClientService.getActivities("Meditation").subscribe(
        act => 
        {
          if(act)
        {
          
        this.current_act = act.slice();

        }
          this.current_act.forEach((act) =>
        {
          if(act.time != null)
          {
            this.items.push({
              title: act.goalType,
              start: new Date(act.time),
            })
          }
        });
        this.events = this.items;
        });
    
  }

  beforeViewRender(
    event: CalendarWeekViewBeforeRenderEvent
  ) {
    this.period = event.period;
    this.cdr.detectChanges();
  }

  
  func(event: any)
  {
    const dialogRef = this.dialog.open(AddActivityDialogComponent, {
      width: '250px',
      data: {quantity: this.quantity, activity: this.chosenAct}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.chosenAct);
      this.createActivity(result.chosenAct, result, event.date);
      this.events = [
        ...this.events,
        {
          title: result.chosenAct,
          start: event.date,
        },
      ];
    }
    );


  }
  public addActivity(): void
  {
    const dialogRef = this.dialog.open(AddDailyActComponent, {
      width: '250px',
      data: {quantity: this.quantity,}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.createActivity(result.chosenAct, result, new Date().toString());
    }
    );
  }

  public get goals()
  {
    var goals = new Array<string>();
    if(!this.workout) 
    {
      goals.push("Workout");
    }
    if(!this.sleep) goals.push("Sleep");
    if(!this.nature) goals.push("Nature");
    if(!this.meditation) goals.push("Meditation");
    if(!this.fruit) goals.push("Fruit");
    if(!this.veg) goals.push("Vegetable");
    return goals;
  }

 

  public addGoal(goaltype : any): void 
  {
    const dialogRef = this.dialog.open(AddGoalDialogComponent, {
      width: '300px',
      data: {goaltype: goaltype}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.createGoal(goaltype, result);
      console.log("created");
    });
  }

  createActivity(goaltype: any, result: any, date:any): void {
    console.log(result);
    var activity = new Activity(null, goaltype, result.quantity, null, date);
    this.httpClientService.createActivity(activity)
        .subscribe( data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = '';
          });
        });

  };

  filterDates = (date: Date): boolean => {
    let today = new Date();
    return date < today;
  }
  createGoal(goaltype: any, result: any): void
  {
    switch(goaltype){
      case 'Workout': {
        var wg = new WorkoutGoal(null, result.quantity, result.frequency, null, 0, null, null);
        this.httpClientService.createWorkoutgoal(wg)
        .subscribe( data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = '';
          });
        });
        this.getWorkoutgoal();
      break;
      }
      case 'Sleep': {
        var sg = new SleepGoal(null, result.quantity, null, 0, null, null);
        this.httpClientService.createSleepGoal(sg)
        .subscribe( data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = '';
          });
        });
        this.getSleepgoal();
        break;
      }
      case 'Fruit': {
        var fg = new FruitGoal(null, result.quantity, null, 0, null, null, null);
        this.httpClientService.createFruitGoal(fg)
        .subscribe( data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = '';
          });
        });
        this.getFruitgoal();
        break;
      }
      case 'Vegetable': {
        var vg = new VegGoal(null, result.quantity, null, 0, null, null);
        this.httpClientService.createVegGoal(vg)
        .subscribe( data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = '';
          });
        });
        this.getVeggoal();
        break;
      }
      case 'Nature': {
        var ng = new NatureGoal(null, result.quantity, result.frequency, null, 0, null, null);
        this.httpClientService.createNatureGoal(ng)
        .subscribe( data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = '';
          });
        });
        this.getNaturegoal();
        break;
      }
      case 'Meditation': {
        var mg = new MeditationGoal(null, result.quantity, result.frequency, null, 0, null, null);
        this.httpClientService.createMeditationGoal(mg)
        .subscribe( data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = '';
          });
        });
        this.getMeditationgoal();
        break;
      }
    }
  }


  public getWorkoutgoal(): WorkoutGoal {
    this.httpClientService.getWorkoutgoal().subscribe(
      response =>
       this.workout = response
     );
     return this.workout;
  }

  public getSleepgoal(): SleepGoal {
    this.httpClientService.getSleepgoal().subscribe(
      response => this.sleep = response,
     );
     return this.sleep;
  }

  public getFruitgoal(): FruitGoal {
    this.httpClientService.getFruitgoal().subscribe(
      response => this.fruit = response
      
     );
     return this.fruit;
  }

  public getVeggoal(): VegGoal {
    this.httpClientService.getVeggoal().subscribe(
      response => this.veg = response,
     );
     return this.veg;
  }

  public getNaturegoal(): NatureGoal {
    this.httpClientService.getNaturegoal().subscribe(
      response => this.nature = response,
     );
     return this.nature;
  }

  public getMeditationgoal(): MeditationGoal {
    this.httpClientService.getMeditationgoal().subscribe(
      response => this.meditation = response,
     );
     return this.meditation;
  }

}
