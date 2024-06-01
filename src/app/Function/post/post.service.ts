import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.module';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://index-1242.onrender.com/post';
  constructor(private http: HttpClient) { }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
