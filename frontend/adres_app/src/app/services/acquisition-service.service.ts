import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Acquisition } from '../models/Acquisition';


@Injectable({
  providedIn: 'root'
})
export class AcquisitionService {

  constructor(private _http: HttpClient) { }

  getAcquisitions(): Observable<Acquisition[]> {
    return this._http.get<Acquisition[]>(`${environment.acquisitionEndpoint}/acquisition/`)
  }

  editAcquisition(acquisition: Acquisition): Observable<Acquisition> {
    return this._http.patch<Acquisition>(`${environment.acquisitionEndpoint}/acquisition/${acquisition.id}/`, acquisition)
  }

  // getHistoric(acquisition: Acquisition): Observable
}
