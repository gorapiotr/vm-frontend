import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GenericListResponse} from '../../shared/models/response.model';
import {Book, BookForm} from '../models/book.model';

@Injectable()
export class BooksService {

  constructor(private readonly _http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this._http.get<GenericListResponse<Book>>('books').pipe(pluck('data'));
  }

  addBook(payload: BookForm): Observable<any> {
    return this._http.post(`books/`, payload);
  }

  editBook(id: number, payload: BookForm): Observable<any> {
    return this._http.put(`books/${id}`, payload);
  }

  removeBook(id: number): Observable<any> {
    return this._http.delete(`books/${id}`);
  }
}
