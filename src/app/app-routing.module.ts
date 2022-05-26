import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDropComponent } from './component/add-drop/add-drop.component';
import { ChangComponent } from './component/chang/chang.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { UserLoginComponent } from './component/user-auth/login/userlogin.component';
import { RegisterSubmitComponent } from './component/register-submit/register-submit.component';
import { RegistrationResultComponent } from './component/registration-result/registration-result.component';
import { UserRegisterComponent } from './component/user-auth/register/user-register.component';
import { DashboardComponent } from './component/main-sidenav/dashboard/dashboard.component';
import { ProfileComponent } from './component/main-sidenav/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'homepage',component: HomepageComponent},
  { path: 'homepage/register',component: UserRegisterComponent},
  { path: 'homepage/dashboard',component: HomepageComponent},
  { path: 'profile',component: ProfileComponent},
  { path: 'register-class',component: RegisterComponent},
  { path: 'registration-result',component: RegistrationResultComponent},
  { path: 'drop-class',component: AddDropComponent},
  { path: 'chang',component: ChangComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
