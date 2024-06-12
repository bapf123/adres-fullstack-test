import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from '../models/Supplier';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private _http: HttpClient) { }

  getSuppliers(): Observable<Supplier[]> {
    return this._http.get<Supplier[]>(`${environment.acquisitionEndpoint}/supplier/`)
  }

  saveSupplier(supplier: Supplier): Observable<Supplier> {
    return this._http.post<Supplier>(`${environment.acquisitionEndpoint}/supplier/`, supplier)
  }
}
