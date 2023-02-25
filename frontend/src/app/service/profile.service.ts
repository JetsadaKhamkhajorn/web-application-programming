import { Injectable } from '@angular/core';


import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Profile } from "../models/Profile";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: Profile[] = [];
  private profiles$ = new Subject<Profile[]>();

   // 1. Node/Express API
  readonly url = "http://localhost:3000/api/profiles";
  // Injection
  constructor(private http: HttpClient) { }

  getProfiles() {
    this.http
      .get<{ profiles: Profile[] }>(this.url)
      .pipe(
        map((profileData) => {
          return profileData.profiles;
        })
      )
      .subscribe((profiles) => {
        this.profiles = profiles;
        this.profiles$.next(this.profiles);
      });
  }
  //Get all objects
  getProfilesStream() {
    return this.profiles$.asObservable();
  }
  
  //Add Profile
  addProfile(name: string, image: File, price: string): void {
    const profileData = new FormData();
    profileData.append("name", name);
    profileData.append("image", image,name);
    profileData.append("price",price);
    this.http
      .post<{ profile: Profile }>(this.url, profileData)
      .subscribe((profileData) => {
        const profile: Profile = {
          _id: profileData.profile._id,
          name: name,
          price: price,
          imagePath: profileData.profile.imagePath,
        };
        this.profiles.push(profile);
        this.profiles$.next(this.profiles);
      });
  }

  
}
