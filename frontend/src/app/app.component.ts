import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  LogoComponent } from "./components/logo/logo.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'frontend';
}
