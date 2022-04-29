import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDropComponent } from './component/add-drop/add-drop.component';
import { ChangComponent } from './component/chang/chang.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { RegisterSubmitComponent } from './component/register-submit/register-submit.component';
import { RegisterComponent } from './component/register/register.component';
import { RegistrationResultComponent } from './component/registration-result/registration-result.component';

const routes: Routes = [
  { path: 'homepage',component: HomepageComponent},
  { path: 'register',component: RegisterComponent},
  { path: 'registration',component: RegistrationResultComponent},
  { path: 'registersubmit',component: RegisterSubmitComponent},
  { path: 'add-drop',component: AddDropComponent},
  { path: 'chang',component: ChangComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
