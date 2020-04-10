import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutgoalComponent } from './workoutgoal/workoutgoal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddWorkoutgoalComponent } from './add-workoutgoal/add-workoutgoal.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthHtppInterceptorService } from './service/auth-htpp-interceptor-service.service';
import { ActivityComponent } from './activity/activity.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutgoalComponent,
    AddWorkoutgoalComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    ActivityComponent,
    AddActivityComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{  
    provide:HTTP_INTERCEPTORS, useClass:AuthHtppInterceptorService, multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
