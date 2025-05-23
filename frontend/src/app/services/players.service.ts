import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
 
  private apiUrl = 'http://localhost:3000/api/players'; 

  constructor(private http: HttpClient) {}  

getPlayerInfo(number: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/Oneplayer`,{ guardian_phone: number });
}

}
