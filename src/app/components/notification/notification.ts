import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {
  notifications: string[] = [
    'Nouvelle conférence disponible',
    'Votre inscription a été confirmée'
  ];

  afficher = false;

  afficherNotifications() {
    this.afficher = !this.afficher;
  }
}
