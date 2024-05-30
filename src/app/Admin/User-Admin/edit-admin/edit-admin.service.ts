import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './edit-admin.module';
@Injectable({
  providedIn: 'root'
})
export class EditAdminService {
  private apiUrl = 'http://localhost:3000/users/me';

  constructor(private http: HttpClient) { }
  
  getUser(token?: string | null): Observable<User> {
    return this.http.get<User>(this.apiUrl, { headers: { Authorization: `Bearer ${token}` } });
  }

}