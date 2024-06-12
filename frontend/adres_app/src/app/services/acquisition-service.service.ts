import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Acquisition } from '../models/Acquisition';
import { Transaction } from '../models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class AcquisitionService {

  constructor(private _http: HttpClient) { }

  getAcquisitions(): Observable<Acquisition[]> {
    return this._http.get<Acquisition[]>(`${environment.acquisitionEndpoint}/acquisition/`)
  }

  getAcquisition(id: number): Observable<Acquisition> {
    return this._http.get<Acquisition>(`${environment.acquisitionEndpoint}/acquisition/${id}/`)
  }

  editAcquisition(acquisition: Acquisition): Observable<Acquisition> {
    return this._http.patch<Acquisition>(`${environment.acquisitionEndpoint}/acquisition/${acquisition.id}/`, acquisition)
  }

  saveAcquisition(acquisition: Acquisition): Observable<Acquisition> {
    return this._http.post<Acquisition>(`${environment.acquisitionEndpoint}/acquisition/`, acquisition)
  }

  getTransactions(acquisitionId: number): Observable<Transaction[]> {
    return this._http.get<Transaction[]>(`${environment.acquisitionEndpoint}/transaction/`, { params: { acquisition_id: acquisitionId } })
  }
}
