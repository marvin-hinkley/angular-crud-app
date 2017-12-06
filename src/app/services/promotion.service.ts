import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from "rxjs/operators";
import { Promotion } from "../models/promotion";
import { MessageService } from "./message.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class PromotionService {
  private promotionUrl = 'api/promotions';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(this.promotionUrl).pipe(
      tap(promotions => this.log('fetched promotions')),
      catchError(this.handleError('getPromotions', []))
    );
  }

  getPromotion(id: string): Observable<Promotion> {
    const url = `${this.promotionUrl}/${id}`;

    return this.http.get<Promotion>(url).pipe(
      tap(promotion => this.log(`fetched promotion id = ${id}`)),
      catchError(this.handleError<Promotion>(`getPromotion id = ${id}`))
    );
  }

  savePromotion(promotion: Promotion): Observable<any> {
    return this.http.put(this.promotionUrl, promotion, httpOptions).pipe(
      tap(_ => this.log(`updated promotion id = ${promotion.PromotionID}`)),
      catchError(this.handleError<any>(`updatePromotion id = ${promotion.PromotionID}`))
    );
  }

  deletePromotion(promotion: Promotion | string): Observable<Promotion> {
    const id = typeof promotion === 'string' ? promotion : promotion.PromotionID;
    const url = `${this.promotionUrl}/${id}`;

    return this.http.delete(url, httpOptions).pipe(
      tap(_ => this.log(`deleted promotion id = ${id}`)),
      catchError(this.handleError<any>(`addPromotion id = ${id}`))
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
    this.messageService.add('Promotion Service: ' + message);
  }
}
