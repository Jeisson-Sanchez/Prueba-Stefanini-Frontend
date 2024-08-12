import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  URI: String = "/api/";

  constructor(private httpClient: HttpClient) { }

  getProductos(): Observable<any>{
    return this.httpClient.get(this.URI+"productos").pipe(
      res => res
    );
  }

  getinventarios(): Observable<any>{
    return this.httpClient.get(this.URI+"inventarios/").pipe(res => res);
  }

  postInventario(inventario: any): Observable<any>{
    return this.httpClient.post(this.URI+"inventarios/", inventario);
  }

  putEstadoInventario(idInventario: number, inventario: any): Observable<any>{
    return this.httpClient.put(this.URI+"inventarios/"+idInventario+"/", inventario);
  }
  
}
