import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Acquisition } from 'src/app/models/Acquisition';
import { AdminUnit } from 'src/app/models/AdminUnit';
import { Supplier } from 'src/app/models/Supplier';
import { ACQUISITION_FIELDS } from 'src/app/models/constants';
import { AcquisitionService } from 'src/app/services/acquisition-service.service';
import { AdminUnitService } from 'src/app/services/admin-unit.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-acquisition',
  templateUrl: './acquisition.component.html',
  styleUrls: ['./acquisition.component.scss']
})
export class AcquisitionComponent implements OnInit {

  currentId: number
  acquisitionForm: FormGroup;

  suppliers: Supplier[] = [];
  adminUnits: AdminUnit[] = [];

  options = [{id: 1, name: 'Opción 1'}]

  fields = ACQUISITION_FIELDS

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private formBuilder: FormBuilder,
    private acquisitionService: AcquisitionService,
    private suppliersService: SupplierService,
    private adminUnitService: AdminUnitService
  ) {
    this.currentId = this.route.snapshot.queryParams['id']
    this.acquisitionForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }],
      budget: [0, Validators.required],
      acquisition_type: [undefined, Validators.required],
      quantity: [0, Validators.required],
      unit_cost: [0, Validators.required],
      total_cost: [{ value: 0, disabled: true }, Validators.required],
      date: [undefined, Validators.required],
      docs: ['', Validators.required],
      status: [undefined, Validators.required],
      unit: [undefined, Validators.required],
      supplier: [undefined, Validators.required]
    })
  }

  ngOnInit(): void {
    this.acquisitionForm.get('unit_cost')?.valueChanges.subscribe(() => {
      this.calculateTotal();
    });
    this.acquisitionForm.get('quantity')?.valueChanges.subscribe(() => {
      this.calculateTotal();
    });

    this.getRelations()
  }


  saveAcquisition = () => {
    const acquisition = this.acquisitionForm.getRawValue()
    if(acquisition.id){
      this.acquisitionService.editAcquisition(acquisition).subscribe(_ => {
        this._router.navigate(['/acquisitions'])
      })
    } else {
      this.acquisitionService.saveAcquisition(acquisition).subscribe(_ => {
        this._router.navigate(['/acquisitions'])
      })
    }
  }

  cancel = () => {
    this._router.navigate(['/home'])
  }

  getAcquisitionData = () => {
    this.acquisitionService.getAcquisition(this.currentId).subscribe(data => {
      this.acquisitionForm.patchValue(data)
    })
  }

  calculateTotal = () => {
    const current = this.acquisitionForm.getRawValue()
    this.acquisitionForm.patchValue({
      total_cost: (current.unit_cost || 0) * (current.quantity || 0)
    })
  }

  getRelations = () => {
    forkJoin([this.suppliersService.getSuppliers(), this.adminUnitService.getAdminUnits()]).subscribe(data => {
      this.suppliers = data[0]
      this.adminUnits = data[1]
      if (this.currentId !== undefined) {
        this.getAcquisitionData();
      }

    })
  }

  getOptions = (attr: string) => ({
    supplier: this.suppliers,
    unit: this.adminUnits
  })[attr]

}
