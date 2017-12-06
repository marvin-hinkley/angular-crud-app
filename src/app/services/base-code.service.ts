import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from "rxjs/operators";
import { BaseCode } from "../models/baseCode";
import { MessageService } from "./message.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class BaseCodeService {
  private baseCodeUrl = 'api/baseCodes';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getBaseCodes(): Observable<BaseCode[]> {
    return this.http.get<BaseCode[]>(this.baseCodeUrl).pipe(
      tap(baseCodes => this.log('fetched baseCodes')),
      catchError(this.handleError('getBaseCodes', []))
    );
  }

  getBaseCode(id: string): Observable<BaseCode> {
    const url = `${this.baseCodeUrl}/${id}`;

    return this.http.get<BaseCode>(url).pipe(
      tap(baseCode => this.log(`fetched baseCode id = ${id}`)),
      catchError(this.handleError<BaseCode>(`getBaseCode id = ${id}`))
    );
  }

  saveBaseCode(baseCode: BaseCode): Observable<any> {
    return this.http.put(this.baseCodeUrl, baseCode, httpOptions).pipe(
      tap(_ => this.log(`updated baseCode id = ${baseCode.ID}`)),
      catchError(this.handleError<any>(`updatePromotion id = ${baseCode.ID}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('BaseCode Service: ' + message);
  }
}
