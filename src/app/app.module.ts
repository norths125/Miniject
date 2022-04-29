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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegisterComponent,
    RegistrationResultComponent,
    RegisterSubmitComponent,
    AddDropComponent,
    ChangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
