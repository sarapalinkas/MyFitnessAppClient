import { Component, OnInit, NgZone } from '@angular/core';
import { Activity, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activities: Activity[];

  constructor(private httpClientService:HttpClientService
    ,private zone: NgZone) { }

  ngOnInit() {
  this.httpClientService.getActivities("WorkoutGoal").subscribe(
    response =>this.handleSuccessfulResponse(response),
   )

 }

handleSuccessfulResponse(response)
{
   this.activities=response;
}



deleteActivity(activity: Activity): void {
  this.httpClientService.deleteActivity(activity)
    .subscribe( data => {
      this.zone.runOutsideAngular(() => {
        window.location.href = '/workoutActivities/WorkoutGoal';
      });
    })
};


}
