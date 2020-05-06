import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes = [
  { path:'', component: MainPageComponent, canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'user', component: DetailsPageComponent, canActivate:[AuthGuardService] },
  { path: 'register', component: SignUpComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
