import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Acquisition } from 'src/app/models/Acquisition';
import { ACQUISITION_FIELDS } from 'src/app/models/constants';
import { AcquisitionService } from 'src/app/services/acquisition-service.service';

@Component({
  selector: 'app-acquisition',
  templateUrl: './acquisition.component.html',
  styleUrls: ['./acquisition.component.scss']
})
export class AcquisitionComponent implements OnInit {

  currentId: number
  acquisitionForm: FormGroup;

  fields = ACQUISITION_FIELDS

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private formBuilder: FormBuilder,
    private acquisitionService: AcquisitionService
  ) {
    this.currentId = this.route.snapshot.queryParams['id']
    this.acquisitionForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }],
      budget: ['', Validators.required],
      acquisition_type: ['', Validators.required],
      quantity: ['', Validators.required],
      unit_cost: ['', Validators.required],
      total_cost: [{value: '', disabled: true}, Validators.required],
      date: ['', Validators.required],
      docs: ['', Validators.required],
      status: ['', Validators.required],
      unit: ['', Validators.required],
      supplier: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    if(this.currentId !== undefined){
      this.getAcquisitionData();
    }

    this.acquisitionForm.get('unit_cost')?.valueChanges.subscribe(() => {
      this.calculateTotal();
    });
    this.acquisitionForm.get('quantity')?.valueChanges.subscribe(() => {
      this.calculateTotal();
    });
  }


  saveAcquisition = () => {
    this.acquisitionService.editAcquisition(this.acquisitionForm.getRawValue()).subscribe(_ => {
      this._router.navigate(['/acquisitions'])
    })
  }

  cancel = () => {
    console.log('okl')
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

}
