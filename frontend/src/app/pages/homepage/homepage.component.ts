import { Component } from '@angular/core';
import { LoginInputsComponent } from "../../components/login-inputs/login-inputs.component";

@Component({
  selector: 'app-homepage',
  imports: [LoginInputsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
