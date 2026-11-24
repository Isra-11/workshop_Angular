import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { FriendsList } from './components/friends-list/friends-list';
import { Header } from './components/header/header';
import { Notification } from './components/notification/notification';
import { Profile } from './components/profile/profile';
import { ConferenceList } from './components/conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,FriendsList,Header,Notification,Profile,ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FirstProject');
}
