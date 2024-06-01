import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './editcustomer.module';
@Injectable({
  providedIn: 'root'
})
export class EditCustomerService {
  private apiUrl = 'https://index-1242.onrender.com/users/me';

  constructor(private http: HttpClient) { }
  
  getUser(token?: string | null): Observable<User> {
    return this.http.get<User>(this.apiUrl, { headers: { Authorization: `Bearer ${token}` } });
  }

}
