import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { User } from '../service/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: User = new User(null,null,null);

  constructor(private router: Router,
    private http: HttpClientService, private zone: NgZone) { }

  ngOnInit() {
  }

  saveUser()
  {
      this.http.addUser(this.user).subscribe
      (
        data => {
          this.zone.runOutsideAngular(() => {
            window.location.href = 'login';
          });
      
  });
 
  }
}
