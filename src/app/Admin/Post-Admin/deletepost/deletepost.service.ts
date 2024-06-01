import { Injectable } from '@angular/core';
import { Post } from './deletepost.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeletepostService {
  private apiUrl = 'https://index-1242.onrender.com/post';
  private apiUrl1 = 'https://index-1242.onrender.com/post/get';
  constructor(private http: HttpClient) {}
  deletePost(id: string): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Post>(url);
  }
  getPostById(postId: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl1}/${postId}`);

}
}
