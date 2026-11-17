import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList {
  friends=[
    { name: 'Ahmed', email: 'Ahmed@esprit.tn' },
    { name: 'Mariem', email: 'Mariem@esprit.tn' },
    { name: 'Oussema', email: 'Oussema@esprit.tn' }
  ]
}
