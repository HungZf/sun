import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order,Product } from './order.module';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl1 = 'https://index-1242.onrender.com/product';
  private apiUrl2 = 'https://index-1242.onrender.com/order/user/order'; 
 
  constructor(private http: HttpClient) { }
  getOrder(token?: string | null): Observable<Order> {
    return this.http.get<Order>(this.apiUrl2, { headers: { Authorization: `Bearer ${token}` } });
  }
  getProductById(Id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl1}/${Id}`);
  }
}
