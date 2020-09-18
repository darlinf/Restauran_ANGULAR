import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../models/icustomer';
import { IFacturacion } from '../models/ifacturacion';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient, @Inject("BASE_URL") private baseUrl: string) { }

  private urlApi: string = this.baseUrl+ "api/customer";

  getCustomer():Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.urlApi+'/and');
  }

  addFacturacion(facturacion: IFacturacion): Observable<IFacturacion>{
    return this.http.post<IFacturacion>(this.urlApi, facturacion);
  }
}
