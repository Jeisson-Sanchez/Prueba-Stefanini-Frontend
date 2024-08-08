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
    return this.httpClient.get(this.URI+"Productos").pipe(
      res => res
    );
  }

  getinventarios(): Observable<any>{
    return this.httpClient.get(this.URI+"Inventarios").pipe(res => res);
  }

  postInventario(inventario: any): Observable<any>{
    return this.httpClient.post(this.URI+"Inventario", inventario);
  }

  putEstadoInventario(idInventario: number, estado: number): Observable<any>{
    const body = {idInventario, estado};
    return this.httpClient.put(this.URI+"EstadoInventario", body);
  }
  
}
