import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly API_URL = 'http://localhost:8081/Product';
  adminhttpOptions:any;
  /*constructor(private httpClient: HttpClient ) {headers: new HttpHeaders({'Authorization':"Bearer"+"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4MjM0NzY1MCwiZXhwIjoxNjgyNDM0MDUwfQ.6TMPzst_zAdf9Zoub2U3a5sCmN7fd0JAcC3oT7HQ_ilJA3DkSy-CcYTGYTiHA49lzHXkvbP0oHD321QFQDCrsA"})};*/
  constructor(private httpClient: HttpClient){
    this.adminhttpOptions ={ 
      headers: new HttpHeaders({
      'Authorization': "Bearer "+"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpZW0yMiIsImlhdCI6MTY4MjM0NzY1MCwiZXhwIjoxNjgyNDM0MDUwfQ.6TMPzst_zAdf9Zoub2U3a5sCmN7fd0JAcC3oT7HQ_ilJA3DkSy-CcYTGYTiHA49lzHXkvbP0oHD321QFQDCrsA"})

      };
  }
 
  getProductById(idProduct : any) {
    return this.httpClient.get(`${this.API_URL}/get/${idProduct}`)
  }
  getAllProducts() {
    return this.httpClient.get<Product[]>("http://localhost:8081/Product/all",this.adminhttpOptions);
  }
  addProduct(idCategory: any, product : any ) {
    return this.httpClient.post(`${this.API_URL}/add/${idCategory}`,this.adminhttpOptions, product)
  }
  editProduct(product : any){
    return this.httpClient.put(`${this.API_URL}/update`, product)
  }
  deleteProduct(idProduct : any){
    return  this.httpClient.delete(`${this.API_URL}/delete/${idProduct}`)
  }
  

}