import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pluck} from 'rxjs/operators';

@Injectable()
export class BooksDictionariesService {

  constructor(private readonly _http: HttpClient) {}

  getCategories(): Observable<any> {
    return this._http.get('categories').pipe(pluck('data'));
  }
}
