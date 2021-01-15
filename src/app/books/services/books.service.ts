import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class BooksService {

  constructor(private readonly _http: HttpClient) {}

  getBooks(): Observable<any> {
    return this._http.get('books').pipe(pluck('data'));
  }

  addBook(payload: any): Observable<any> {
    return this._http.post(`books/`, payload);
  }

  editBook(id: number, payload: any): Observable<any> {
    return this._http.put(`books/${id}`, payload);
  }

  removeBook(id: number): Observable<any> {
    return this._http.delete(`books/${id}`);
  }
}
