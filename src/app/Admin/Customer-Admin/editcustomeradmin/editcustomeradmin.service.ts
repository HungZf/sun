import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './editcustomeradmin.module';
@Injectable({
  providedIn: 'root'
})
export class EditcustomeradminService {
  private apiUrl = 'https://index-1242.onrender.com/users/infor';
  private apiUrl1 = 'https://index-1242.onrender.com/users/update';
 
  constructor(private http: HttpClient) { }
  getUser(Id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${Id}`);
  }
  updateUser(id: string, role_id: number): Observable<User> {
    const url = `${this.apiUrl1}/${id}`;
    return this.http.put<User>(url, {role_id : role_id });
  }
  


}
