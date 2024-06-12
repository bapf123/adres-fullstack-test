import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from '../models/Supplier';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminUnit } from '../models/AdminUnit';

@Injectable({
  providedIn: 'root'
})
export class AdminUnitService {

  constructor(private _http: HttpClient) { }

  getAdminUnits(): Observable<AdminUnit[]> {
    return this._http.get<AdminUnit[]>(`${environment.acquisitionEndpoint}/admin-unit/`)
  }

  saveAdminUnit(adminUnit: AdminUnit): Observable<AdminUnit> {
    return this._http.post<AdminUnit>(`${environment.acquisitionEndpoint}/admin-unit/`, adminUnit)
  }
}
