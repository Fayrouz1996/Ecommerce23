import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {private apiURL = "https://backend-ecommerce-2023.vercel.app/api";}
  

  constructor(private httpClient: HttpClient) { 
    httpOptions =
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    getAll(): Observable<any> {
      return this.httpClient.get(this.apiURL + '/articles/')
      .pipe(catchError(this.errorHandler))
  }

  }

function getAll(): void {
  throw new Error('Function not implemented.');
}
  