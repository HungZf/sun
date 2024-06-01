import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './postadmin.module';
@Injectable({
  providedIn: 'root'
})
export class PostadminService {
  private apiUrl = 'https://index-1242.onrender.com/post';
  private apiUrl1 = 'https://index-1242.onrender.com/post/search';
  constructor(private http: HttpClient) { }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
  searchPostByTitle(title : string): Observable<Post[]> {
    const url = `${this.apiUrl1}/${title}`;
    return this.http.post<Post[]>(url,{  title : title });
  }
}
