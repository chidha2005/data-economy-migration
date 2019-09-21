import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private baseUrl = '/datamigration/connection';

  constructor(private http: HttpClient) { }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get`);
  }
}