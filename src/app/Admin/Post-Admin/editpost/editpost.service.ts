import { Injectable } from '@angular/core';
import { Post } from './editpost.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditpostService {

  private apiUrl = 'https://index-1242.onrender.com/post';
  private apiUrl1 = 'https://index-1242.onrender.com/post/get';
  constructor(private http: HttpClient) {}
  updatePost(id: string, post: Post): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Post>(url, post);
  }
  getPostById(postId: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl1}/${postId}`);

}
}
