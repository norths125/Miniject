import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { RegisterComponent } from './component/register/register.component';
import { RegistrationResultComponent } from './component/registration-result/registration-result.component';
import { RegisterSubmitComponent } from './component/register-submit/register-submit.component';
import { AddDropComponent } from './component/add-drop/add-drop.component';
import { ChangComponent } from './component/chang/chang.component';
import { UserLoginComponent } from './component/user-auth/login/userlogin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './component/user-auth/register/user-register.component';
import { DashboardComponent } from './component/main-sidenav/dashboard/dashboard.component';
import { ProfileComponent } from './component/main-sidenav/profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegisterComponent,
    RegistrationResultComponent,
    RegisterSubmitComponent,
    AddDropComponent,
    ChangComponent,
    UserLoginComponent,
    UserRegisterComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
