import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { AllProfilesComponent } from './components/all-profiles/all-profiles.component';

import { ReactiveFormsModule } from "@angular/forms";
//เพิ่ม HttpClientModule
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';

import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProfileComponent,
    AllProfilesComponent,
    HomeComponent,
   
    ContactComponent,
        LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
