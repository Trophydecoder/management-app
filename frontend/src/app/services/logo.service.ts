import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoService {
  private logoUrl: string = '/assets/ConnectLogo.png'; //path to the image CONNECTLOGO

  constructor() {}

  getLogo(): string {
    return this.logoUrl;
  }

}
