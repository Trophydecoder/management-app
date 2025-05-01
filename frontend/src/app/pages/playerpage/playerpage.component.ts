import { Component } from '@angular/core';
import { PlayercardIDComponent } from "../../components/playercard-id/playercard-id.component";
import { PlayerbuttonsComponent } from "../../components/playerbuttons/playerbuttons.component";

@Component({
  selector: 'app-playerpage',
  imports: [PlayercardIDComponent, PlayerbuttonsComponent],
  templateUrl: './playerpage.component.html',
  styleUrl: './playerpage.component.scss'
})
export class PlayerpageComponent {

}
