import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  url = "https://fakestoreapi.com/products"
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.url)
  }
  dltData(id: number) {
    return this.http.delete(`${this.url}/${id}`);

  }
}
