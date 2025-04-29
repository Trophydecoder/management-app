import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  LogoComponent } from "./components/logo/logo.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
