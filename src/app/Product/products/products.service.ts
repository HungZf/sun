import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Category,OrderDetail } from './products.module';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://index-1242.onrender.com/product';
  private apiUrl1 = 'https://index-1242.onrender.com/orderdetail';
  private apiUrl2 = 'https://index-1242.onrender.com/category';
  private apiUrl3 = 'https://index-1242.onrender.com/product/search';
  private apiUrl4 = 'https://index-1242.onrender.com/category/search/type';
  constructor(private http: HttpClient) {}

  getProduct(): Observable<Product> {
    return this.http.get<Product>(this.apiUrl);
  }
  getCategory(): Observable<Category> {
    return this.http.get<Category>(this.apiUrl2);
  }
 
  getCategoryById(categoryId: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl2}/${categoryId}`);

}
searchProductsByCategoryId(categoryId1: number): Observable<Product[]> {
  return this.http.post<Product[]>(this.apiUrl3, { categoryId: categoryId1 });
}
searchProductsByName(name: string): Observable<Product[]> {
  return this.http.post<Product[]>(this.apiUrl3, {  name: name });
}
searchProductsByPrice(minPrice: number, maxPrice:number): Observable<Product[]> {
  return this.http.post<Product[]>(this.apiUrl3, {  minPrice: minPrice,maxPrice : maxPrice });
}
postOrderdetail(token: string | null | undefined,price: number,productId : number,quantity : number): Observable<OrderDetail> {
  
  const headers = { Authorization: `Bearer ${token}` };
  return this.http.post<OrderDetail>(this.apiUrl1, {price:price,productId : productId,quantity:quantity}, { headers: headers  });
}
postType(type: string | null): Observable<Category[]> {
  return this.http.post<Category[]>(this.apiUrl4,{ type : type});
}

}
