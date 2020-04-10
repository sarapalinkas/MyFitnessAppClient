import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutgoalComponent } from './workoutgoal/workoutgoal.component';
import { AddWorkoutgoalComponent } from './add-workoutgoal/add-workoutgoal.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-guard.service';
import { ActivityComponent } from './activity/activity.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path:'', component: WorkoutgoalComponent, canActivate:[AuthGaurdService]},
  { path:'addworkoutgoal', component: AddWorkoutgoalComponent, canActivate:[AuthGaurdService]},
  { path: 'workoutActivities/WorkoutGoal', component: ActivityComponent, canActivate:[AuthGaurdService] },
  { path: 'addActivity', component: AddActivityComponent, canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
