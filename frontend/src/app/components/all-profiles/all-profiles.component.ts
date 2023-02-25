import { Component, OnInit} from '@angular/core';


import { ProfileService } from "src/app/service/profile.service";
import { Profile } from "src/app/models/Profile";

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.css']
})
export class AllProfilesComponent implements OnInit{
  profiles: Profile[] = [];

  constructor(private profilesService: ProfileService) { }
  
  ngOnInit(): void {
    this.profilesService.getProfiles();
    this.profilesService
      .getProfilesStream()
      .subscribe((profiles: Profile[]) => {
        this.profiles = profiles;
      });
  }

}
