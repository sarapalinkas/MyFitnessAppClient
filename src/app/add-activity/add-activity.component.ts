import { Component, OnInit, NgZone } from '@angular/core';
import { Activity, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {

  activity: Activity = new Activity(null, null, null,null);
  constructor(private httpClientService: HttpClientService,
    private zone: NgZone,) { }

  ngOnInit(): void {
  }

  createActivity(): void {
    this.httpClientService.createActivity(this.activity)
        .subscribe( data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = '';
          });
        });

  };

}
