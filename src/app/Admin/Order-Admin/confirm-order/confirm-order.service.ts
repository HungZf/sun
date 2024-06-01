import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order ,User} from './confirm-order.module';

@Injectable({
  providedIn: 'root'
})
export class ConfirmOrderService {

  private apiUrl = 'https://index-1242.onrender.com/order/allcomplete';
  private apiUrl1 = 'https://index-1242.onrender.com/users/infor';
  constructor(private http: HttpClient) { }
  getOrder(): Observable<Order> {
    return this.http.get<Order>(this.apiUrl);
  }
  getUserById(Id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl1}/${Id}`);
  }
}
