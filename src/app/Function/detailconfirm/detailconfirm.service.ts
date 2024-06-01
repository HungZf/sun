import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order ,OrderDetail,Product} from './detailconfirm.module';
@Injectable({
  providedIn: 'root'
})
export class DetailconfirmService {

  private apiUrl = 'https://index-1242.onrender.com/order/user/orderWait';
  private apiUrl1 = 'https://index-1242.onrender.com/product';
  private apiUrl2 = 'https://index-1242.onrender.com/order/detail'; 
 
  
  constructor(private http: HttpClient) { }
  getOrderById(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${orderId}`);
  }
  
  getOrderDetailById(orderId: string): Observable<OrderDetail> {
    return this.http.get<OrderDetail>(`${this.apiUrl2}/${orderId}`);
  }
  getProductById(Id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl1}/${Id}`);
  }
}
