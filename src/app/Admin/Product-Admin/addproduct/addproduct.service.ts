import { Injectable } from '@angular/core';
import {  Category } from './addproduct.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AddproductService {
  private apiUrl  = 'https://index-1242.onrender.com/category';
  constructor(private http: HttpClient) {}
  getCategory(): Observable<Category> {
    return this.http.get<Category>(this.apiUrl);
  }
}
