import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterplayerService {




  private apiUrl = 'http://localhost:3000/api/players';


  constructor(private http: HttpClient) {}  

  GetRegisterPlayer(credentials: any): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }

  getAllPlayers() {
    return this.http.get<any[]>('http://localhost:3000/api/players');
  }
  
}

