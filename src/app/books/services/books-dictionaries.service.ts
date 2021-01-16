import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pluck} from 'rxjs/operators';
import {GenericListResponse} from '../../shared/models/response.model';
import {Category} from '../models/book.model';

@Injectable()
export class BooksDictionariesService {

  constructor(private readonly _http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this._http.get<GenericListResponse<Category>>('categories').pipe(pluck('data'));
  }
}
