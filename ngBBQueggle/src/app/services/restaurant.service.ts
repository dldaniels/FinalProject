import { Address } from './../models/address';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Restaurant } from '../models/restaurant';
import { catchError} from 'rxjs/operators';
import { style } from '@angular/animations';
import { AuthService } from './auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private baseUrl = environment.baseUrl;                    // Production
  url = this.baseUrl + 'api/restaurants';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  index(): Observable<Restaurant[]>{
    const credentials = this.authService.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    return this.http.get<Restaurant[]>(this.url + '/?sorted=true', httpOptions).pipe(
      catchError((err:any)=>{
      console.log(err);
      return throwError('RestaurantService.index(): error');

      })
    );
  }


  // show(id: number): Observable<Restaurant> {
  //   return this.http.get<Restaurant>(this.url + '/' + id + '?sorted=true').pipe(
  //     catchError((err: any) => {
  //       console.log(err);
  //       return throwError('RestaurantService.show(): error');
  //     })
  //   );
  // }

  show(id: number): Observable<Restaurant> {
    const credentials = this.authService.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    if(this.authService.checkLogin()) {
    return this.http.get<Restaurant>(this.url + '/' + id, httpOptions).pipe(
      catchError((err:any)=>{
      console.log(err);
      return throwError('RestaurantService.show(): error');
      })
    );
    } else {
      this.router.navigateByUrl('home');
    }
  }

  create(newRestaurant: Restaurant){
    const credentials = this.authService.getCredentials();
    const httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Basic ${credentials}`,
      'Content-type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
      })
    };
    return this.http.post<Restaurant>(this.url, newRestaurant, httpOptions).pipe(
      catchError((err:any)=>{
      console.log(err);
      return throwError('RestaurantService.create(): error');
    })
    );
  }

  update(id: number, restaurant: Restaurant){
    const credentials = this.authService.getCredentials();
    const httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Basic ${credentials}`,
      'Content-type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
      })
    };
    return this.http.put<Restaurant>(this.url + '/' + id, restaurant, httpOptions).pipe(
      catchError((err:any)=>{
      console.log(err);
      return throwError('RestaurantService.update(): error');
    })
    );
  }
  delete(id: number){
    return this.http.delete<Restaurant>(this.url + '/' + id).pipe(
      catchError((err:any)=>{
      console.log(err);
      return throwError('RestaurantService.delete(): error');
    })
    );
  }

  findRestaurantsByState(state: string): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.url + '/search/' + state).pipe(
      catchError((err:any)=>{
      console.log(err);
      return throwError('RestaurantService.findRestaurantByState(): error');
    })
    );
  }
  findRestaurantsByName(state: string, name: string): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.url + '/search/' + state + '/name/' + name).pipe(
      catchError((err:any)=>{
      console.log(err);
      return throwError('RestaurantService.findRestaurantByName(): error');
    })
    );
  }
  findRestaurantsByMeatType(state: string, meatType: string): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.url + '/search/' + state + '/meat/' + meatType).pipe(
      catchError((err:any)=>{
      console.log(err);
      return throwError('RestaurantService.findRestaurantByMeatType(): error');
    })
    );
  }
  findRestaurantsBySideDish(state: string, sideDish: string): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.url + '/search/' + state + '/sideDish/' + sideDish).pipe(
      catchError((err:any)=>{
      console.log(err);
      return throwError('RestaurantService.findRestaurantBySideDish(): error');
    })
    );
  }
  findRestaurantsByMainDish(state: string, mainDish: string): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.url + '/search/' + state + '/mainDish/' + mainDish).pipe(
      catchError((err:any)=>{
      console.log(err);
      return throwError('RestaurantService.findRestaurantByMainDish(): error');
    })
    );
  }

  findRestaurantsByStyle(state: string, style: string): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.url + '/search/' + state + '/style/' + style).pipe(
      catchError((err:any)=>{
      console.log(err);
      return throwError('RestaurantService.findRestaurantByStyle(): error');
    })
    );
  }
}
