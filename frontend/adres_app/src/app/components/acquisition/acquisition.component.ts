import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acquisition',
  templateUrl: './acquisition.component.html',
  styleUrls: ['./acquisition.component.scss']
})
export class AcquisitionComponent implements OnInit {

  currentId: number
  acquisitionForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.currentId = this.route.snapshot.queryParams['id']
    this.acquisitionForm = this.formBuilder.group({
      budget: 0,
      acquisition_type: '',
      quantity: 0,
      unit_cost: 0,
      total_cost: 0,
      date: '',
      docs: '',
      status: '',
      unit: '',
      supplier: ''
    })
  }

  ngOnInit(): void {
  }

}
