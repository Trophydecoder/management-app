import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UpdateplayerService {

    private apiUrl = 'http://localhost:3000/api/players'

    constructor(private http: HttpClient) {}  
  
    UpdateUser(playerData: any): Observable<any> {
      return this.http.put(this.apiUrl, playerData);
    }

    getAllPlayers() {
        return this.http.get<any[]>('http://localhost:3000/api/players');
      }
  }


