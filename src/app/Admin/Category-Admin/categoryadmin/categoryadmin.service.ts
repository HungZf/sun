import { Injectable } from '@angular/core';
import { Category } from './categoryadmin.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryadminService {
  private apiUrl = 'https://index-1242.onrender.com/category';
  private apiUrl1 = 'https://index-1242.onrender.com/category/search/name';
  constructor(private http: HttpClient) { }
  getCategory(): Observable<Category> {
    return this.http.get<Category>(this.apiUrl);
  }
  searchCategoryByName(name: string): Observable<Category[]> {
    return this.http.post<Category[]>(this.apiUrl1,{  category_name : name });
  }
}
