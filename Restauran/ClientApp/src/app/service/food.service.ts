import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { IFoods } from '../models/ifoods';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient, @Inject("BASE_URL") private baseUrl: string ) { }

  private urlApi: string = this.baseUrl + "api/foods";

  getFoods(): Observable<IFoods[]>{
    return this.http.get<IFoods[]>(this.urlApi);
  }

  deleteFood(id: number): Observable<IFoods>{
    return this.http.delete<IFoods>(this.urlApi+"/"+id)
  }
  addFood(foods: IFoods): Observable<IFoods>{
    return this.http.post<IFoods>(this.urlApi,foods)
  }
  getFoodById(id: number): Observable<IFoods>{
    return this.http.get<IFoods>(this.urlApi+"/"+id);
  }
  editFood(id: number, food: IFoods): Observable<IFoods>{console.log("fdsdf");
    return this.http.put<IFoods>(this.urlApi+"/"+id, food);   
  }
}
