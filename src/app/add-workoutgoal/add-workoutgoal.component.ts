import { Component, OnInit, NgZone } from '@angular/core';
import { Workoutgoal, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-add-workoutgoal',
  templateUrl: './add-workoutgoal.component.html',
  styleUrls: ['./add-workoutgoal.component.scss']
})
export class AddWorkoutgoalComponent implements OnInit {

  user: Workoutgoal = new Workoutgoal(null, null, null, null, 0, null, null);
  constructor(private httpClientService: HttpClientService,
    private zone: NgZone,) { }

  ngOnInit(): void {
  }

  createWorkoutgoal(): void {
    this.httpClientService.createWorkoutgoal(this.user)
        .subscribe( data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = '';
          });
        });

  };
}
