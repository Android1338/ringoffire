import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent {
  name: string = '';

  onNoClick(): void {
    // Logik, die ausgeführt werden soll, wenn der Button geklickt wird
    console.log('No Thanks button clicked');
  }

}
