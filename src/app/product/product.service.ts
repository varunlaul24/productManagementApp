import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
  images: string[];
  creationAt: string;
  updatedAt: string;
  content?: string;
  author?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  createProduct(data: any) {
    console.log(data);
    return this.http.post('https://api.escuelajs.co/api/v1/products/', data);
  }

  updateProduct(userId: number, postData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(
      `https://api.escuelajs.co/api/v1/products/${userId}`,
      postData,
      { headers }
    );
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`);
  }

  getCategoryId() {
    return this.http.get('https://api.escuelajs.co/api/v1/categories/').pipe(
      map((res: any) => res),
      catchError((error) => {
        console.error('Error fetching categories', error);
        return throwError(error);
      })
    );
  }
}
