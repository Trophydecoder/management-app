import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteplayerService {

  constructor(private http: HttpClient) {}  

  private apiUrl = 'http://localhost:3000/api/players'; 

  deletePlayer(phone: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/players/${encodeURIComponent(phone)}`);
  }

}