import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, Product } from './productadmin.module';

@Injectable({
  providedIn: 'root'
})
export class ProductadminService {
  private apiUrl = 'https://index-1242.onrender.com/product';
  private apiUrl1 = "https://index-1242.onrender.com/category"
  private apiUrl2 = 'https://index-1242.onrender.com/product/search';
  constructor(private http: HttpClient) { }
  getProduct(): Observable<Product> {
    return this.http.get<Product>(this.apiUrl);
  }
  getCategoryById(Id: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl1}/${Id}`);
  }
  searchProductsByName(name: string): Observable<Product[]> {
    return this.http.post<Product[]>(this.apiUrl2, {  name: name });
  }
}
