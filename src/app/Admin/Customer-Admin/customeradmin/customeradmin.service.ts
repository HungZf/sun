import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role, User } from './customeradmin.module';

@Injectable({
  providedIn: 'root'
})
export class CustomeradminService {

  private apiUrl = 'https://index-1242.onrender.com/users';
  private apiUrl1 = 'https://index-1242.onrender.com/role';
  
  constructor(private http: HttpClient) { }
  getUser(): Observable<User> {
    return this.http.get<User>(this.apiUrl);
  }

getRoleById(roleId: string): Observable<Role> {
  return this.http.get<Role>(`${this.apiUrl1}/${roleId}`);
}
}
