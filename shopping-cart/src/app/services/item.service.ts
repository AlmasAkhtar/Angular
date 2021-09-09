import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IItem} from '../models/Item';
import {StringStorage} from 'src/StringStorage';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly HEADERS = new HttpHeaders({ 'Content-Type':  'application/json' });
  private http: HttpClient;
  private readonly itemUrl = StringStorage.apiUrl + 'items';

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>(this.itemUrl, {headers: this.HEADERS});
  }

  getItem(itemId: number): Observable<IItem> {
    const url: string = this.itemUrl + '/' + itemId;
    return this.http.get<IItem>(url, {headers: this.HEADERS});
  }

  createItem(item: IItem): Observable<HttpResponse<IItem>> {
    return this.http.post<IItem>(this.itemUrl, item, {headers: this.HEADERS, observe: 'response'});
  }

  updateItem(item: IItem): Observable<HttpResponse<IItem>> {
    return this.http.put<IItem>(this.itemUrl, item, {headers: this.HEADERS, observe: 'response'});
  }

  deleteItem(itemId: number): Observable<HttpResponse<IItem>> {
    const url = this.itemUrl + '/' + itemId;
    return this.http.delete<IItem>(url, {headers: this.HEADERS, observe: 'response'});
  }



}
