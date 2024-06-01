
import { Injectable } from '@angular/core';
import { Product , Category } from './editproduct.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EditproductService {
  private apiUrl = 'https://index-1242.onrender.com/product';
  private apiUrl1  = 'https://index-1242.onrender.com/category';
  constructor(private http: HttpClient) {}
  updateProduct(id: string, product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Product>(url, product);
  }
  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);

}
getCategory(): Observable<Category> {
  return this.http.get<Category>(this.apiUrl1);
}
}
