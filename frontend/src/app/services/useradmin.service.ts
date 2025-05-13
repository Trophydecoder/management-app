import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UseradminService {
 
  private apiUrl = 'http://localhost:3000/api/loginUser';


  constructor(private http: HttpClient) {}  

  GetloginAdmin(credentials: any): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }

}




