import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order ,User,OrderDetail,Product} from './orderconfirmdetail.module';
@Injectable({
  providedIn: 'root'
})
export class OrderconfirmdetailService {

  private apiUrl = 'https://index-1242.onrender.com/order/user/orderWait';
  private apiUrl1 = 'https://index-1242.onrender.com/users/infor';
  private apiUrl2 = 'https://index-1242.onrender.com/product';
  private apiUrl3 = 'https://index-1242.onrender.com/order/detail'; 
  
  constructor(private http: HttpClient) { }
  getOrderById(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${orderId}`);
  }
  getUserById(Id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl1}/${Id}`);
  }
  getOrderDetailById(orderId: string): Observable<OrderDetail> {
    return this.http.get<OrderDetail>(`${this.apiUrl3}/${orderId}`);
  }
  getProductById(Id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl2}/${Id}`);
  }
}
