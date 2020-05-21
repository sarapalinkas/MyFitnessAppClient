import { Component, OnInit, NgZone } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { WorkoutGoal } from '../model/workout.model';
import { SleepGoal } from '../model/sleep.model';
import { NatureGoal } from '../model/nature.model';
import { FruitGoal } from '../model/fruit.model';
import { VegGoal } from '../model/veg.model';
import { MeditationGoal } from '../model/meditation.model';
import { HttpClientService } from '../service/http-client.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateGoalsComponent } from './update-goals/update-goals.component';
import { Activity } from '../model/activity.model';
export interface UpdateDialogData {
  goaltype: string;
  goal: any;
  quantity: number;
  frequency: number;
}

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  public _userName: string = this.authenticationService.getUser();
  public quantity: number;
  public frequency: number;

  public medals: Array<number>;
  
  workoutGoal: WorkoutGoal;
  sleepGoal: SleepGoal;
  natureGoal: NatureGoal;
  fruitGoal: FruitGoal;
  vegGoal: VegGoal;
  meditationGoal: MeditationGoal;

  workoutActivities: Activity[];
  sleepActivities: Activity[];
  fruitActivities: Activity[];
  vegActivities: Activity[];
  meditationActivities: Activity[];
  natureActivities: Activity[];

  goals = [
    this.workoutGoal,
    this.sleepGoal,
    this.natureGoal,
    this.fruitGoal,
    this.vegGoal,
    this.meditationGoal
  ]

  constructor(private authenticationService: AuthenticationService, private httpClientService: HttpClientService,private zone: NgZone
    ,public dialog: MatDialog) {
   
   }

  ngOnInit(): void {
    
    this.httpClientService.getWorkoutgoal().subscribe(
      result => this.workoutGoal = result
    );
    this.httpClientService.getSleepgoal().subscribe(
      result => this.sleepGoal = result
    );
    this.httpClientService.getNaturegoal().subscribe(
      result => this.natureGoal = result
    );
    this.httpClientService.getFruitgoal().subscribe(
      result => this.fruitGoal = result
    );
    this.httpClientService.getVeggoal().subscribe(
      result => this.vegGoal = result
    );
    this.httpClientService.getMeditationgoal().subscribe(
      result => this.meditationGoal = result
    );
    this.httpClientService.getMedals().subscribe(
      result => this.medals = Array(result)
    );
    this.httpClientService.getActivities('Workout').subscribe(
      result => this.workoutActivities =result.slice()
    );
    this.httpClientService.getActivities('Sleep').subscribe(
      result => this.sleepActivities =result.slice()
    );
    this.httpClientService.getActivities('Fruit').subscribe(
      result => this.fruitActivities =result.slice()
    );
    this.httpClientService.getActivities('Vegetable').subscribe(
      result => this.vegActivities =result.slice()
    );
    this.httpClientService.getActivities('Meditation').subscribe(
      result => this.meditationActivities =result.slice()
    );
    this.httpClientService.getActivities('Nature').subscribe(
      result => this.natureActivities =result.slice()
    );

    console.log(this.medals);
  }

  public get workoutActivites(): Activity[]
  {
    return this.workoutActivities;
  }

  public updateGoal(goaltype: string, goal: any): void
  {
    const dialogRef = this.dialog.open(UpdateGoalsComponent, {
      width: '250px',
      data: {goaltype: goaltype, goal:goal, quantity: this.quantity, frequency: this.frequency}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.update(goaltype, result);
    });
    
  
  }

  get userName(): string {
    return this._userName;
}

  public deleteActivity(id: number): void
  {
    this.httpClientService.deleteActivity(id).subscribe();
  }

  public deleteGoal(goaltype: string, goal: any): void
  {
    switch (goaltype) { 
      case 'workoutGoal': { 
        this.httpClientService.deleteWorkoutgoal(goal).subscribe();
        window.location.reload;
         break; 
      } 
      case 'sleepGoal': { 
        this.httpClientService.deleteSleepGoal(goal).subscribe(() => {
          window.location.reload
        });
         break; 
      } 
      case 'fruitGoal': { 
        this.httpClientService.deleteFruitGoal(goal).subscribe();
         break; 
      } 
      case 'vegGoal': { 
        this.httpClientService.deleteVegGoal(goal).subscribe();
         break; 
      } 
      case 'natureGoal': { 
        this.httpClientService.deleteNatureGoal(goal).subscribe();
        window.location.reload;
         break; 
      } 
      case 'meditationGoal': { 
        this.httpClientService.deleteMeditationGoal(goal).subscribe();
         break; 
      } 

  }

  }

  update(goaltype: any, result: any): void
  {
    console.log(goaltype);
    switch(goaltype){
      case 'workoutGoal': {
      
        var wg = new WorkoutGoal(null, result.quantity, result.frequency, null, 0, null, null);
        this.httpClientService.updateWorkoutgoal(wg)
        .subscribe( data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = 'user';
          });
        });
      break;
      }
      case 'sleepGoal': {
        var sg = new SleepGoal(null, result.quantity, null, 0, null, null);
        this.httpClientService.updateSleepGoal(sg)
        .subscribe( data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = 'user';
          });
        });
        break;
      }
      case 'fruitGoal': {
        var fg = new FruitGoal(null, result.quantity, null, 0, null, null, null);
        this.httpClientService.updateFruitGoal(fg)
        .subscribe( data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = 'user';
          });
        });
        break;
      }
      case 'vegGoal': {
        var vg = new VegGoal(null, result.quantity, null, 0, null, null);
        this.httpClientService.updateVegGoal(vg)
        .subscribe( data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = 'user';
          });
        });
        break;
      }
      case 'natureGoal': {
        var ng = new NatureGoal(null, result.quantity, result.frequency, null, 0, null, null);
        this.httpClientService.updateNatureGoal(ng)
        .subscribe( data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = 'user';
          });
        });
        break;
      }
      case 'meditationGoal': {
        var mg = new MeditationGoal(null, result.quantity, result.frequency, null, 0, null, null);
        this.httpClientService.updateMeditationGoal(mg)
        .subscribe( data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = 'user';
          });
        });
        break;
      }
    }
  }

}
