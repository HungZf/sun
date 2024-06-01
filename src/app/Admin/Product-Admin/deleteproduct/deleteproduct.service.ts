import { Injectable } from '@angular/core';
import { Product } from './deleteproduct.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteproductService {

  private apiUrl = 'https://index-1242.onrender.com/product';

  constructor(private http: HttpClient) {}
  deleteProduct(id: string): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Product>(url);
  }
  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);

}
}
