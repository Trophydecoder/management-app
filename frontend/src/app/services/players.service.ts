import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Player {
  firstname: string;
  lastname: string;
  position: string;
  age: number;
  guardian_name: string;
  guardian_phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor() {}

  getPlayerByPhone(phoneNumber:any) {
    //return this.http.post<Player>('/api/player', { guardian_phone: phone });

    console.log("works", phoneNumber);
    
  }
}
