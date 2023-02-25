import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProfilesComponent } from './components/all-profiles/all-profiles.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'all', component:AllProfilesComponent},
  {path: 'cre', component:CreateProfileComponent},
  {path: 'login', component:LoginComponent},
  {path: 'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
