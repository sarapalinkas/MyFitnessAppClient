import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClientService, Workoutgoal } from '../service/http-client.service';

@Component({
  selector: 'app-workoutgoal',
  templateUrl: './workoutgoal.component.html',
  styleUrls: ['./workoutgoal.component.scss']
})
export class WorkoutgoalComponent implements OnInit {

  workoutgoals: Workoutgoal;

  constructor(private httpClientService:HttpClientService
    ,private zone: NgZone) { }

  ngOnInit() {
    this.httpClientService.getWorkoutgoal().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
 }

handleSuccessfulResponse(response)
{
   this.workoutgoals=response;
}

deleteWorkoutGoal(workoutgoal: Workoutgoal): void {
  this.httpClientService.deleteWorkoutgoal(workoutgoal)
    .subscribe( data => {
      this.zone.runOutsideAngular(() => {
        window.location.href = '';
      });
    })
};

}
