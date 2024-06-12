import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Acquisition } from 'src/app/models/Acquisition';

import { AcquisitionService } from 'src/app/services/acquisition-service.service';
import { mapObjIndexed } from 'ramda'
import { Router } from '@angular/router';
import { ACQUISITION_FIELDS, DATE_REGEX } from 'src/app/models/constants';

@Component({
  selector: 'app-acquisitions',
  templateUrl: './acquisitions.component.html',
  styleUrls: ['./acquisitions.component.scss']
})
export class AcquisitionsComponent implements OnInit {

  acquisitions: Acquisition[] = []
  data: Acquisition[] = []

  columns = ACQUISITION_FIELDS

  constructor(
    private acquisitionService: AcquisitionService, 
    private datePipe: DatePipe,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData = () => {
    this.acquisitionService.getAcquisitions().subscribe(data => {
      this.acquisitions = data
      this.treatData(data)
    })
  }

  treatData = (data: Acquisition[]) => {
    this.data = data.filter(acq => acq.status !== 'DELETED').map(acq => mapObjIndexed((val, key, _) => this.treatValMap(key)(val), acq) as Acquisition)
  }

  treatValMap = (attr: string) => ({
    budget: (val: any) => this.treatNumber(val),
    unit_cost: (val: any) => this.treatNumber(val),
    total_cost: (val: any) => this.treatNumber(val),
    date: (val: any) => this.datePipe.transform(val, 'dd \'de\' MMMM \'de\' yyyy', 'UTC', 'es-CO')
  })[attr] || (val => val)

  editRegister = (row: Acquisition) => {
    this._router.navigate(['/acquisition'], { queryParams: { id: row.id },  })
  }

  deleteRegister = (row: Acquisition) => {
    this.acquisitionService.editAcquisition({ id: row.id, status: 'DELETED' } as Acquisition).subscribe(_ => {
      this.treatData(this.acquisitions.filter(acq => acq.id !== row.id))
    })
  }

  historic = (row: Acquisition) => {
    this._router.navigate(['/historic'], { queryParams: { id: row.id } })
  }

  treatNumber = (val: number) => `$ ${val.toString().replace(DATE_REGEX, '.')}`

  goToCreate = () => {
    this._router.navigate(['/acquisition'])
  }

}
