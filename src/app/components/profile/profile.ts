import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  nom : string = 'Ahmed';
  email : string = 'Ahmed@esprit.tn';
}
