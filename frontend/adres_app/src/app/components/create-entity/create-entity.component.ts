import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ENTITIES_MAP } from 'src/app/models/constants';
import { AdminUnitService } from 'src/app/services/admin-unit.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-create-entity',
  templateUrl: './create-entity.component.html',
  styleUrls: ['./create-entity.component.scss']
})
export class CreateEntityComponent implements OnInit {

  entity: any;
  entityKey = ''
  entityForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private formBuilder: FormBuilder,
    private adminUnitService: AdminUnitService,
    private supplierService: SupplierService
  ) {
    this.entityKey = this.route.snapshot.queryParams['entity']
    if (!this.entityKey) {
      this._router.navigate(['/home'])
    } else {
      this.entity = ENTITIES_MAP[this.entityKey]
    }
    this.entityForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }],
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  saveEntity = () => {
    if (this.entityKey === 'supplier'){
      this.supplierService.saveSupplier(this.entityForm.getRawValue()).subscribe(_ => {
        this._router.navigate(['/home'])
      })
    } else if(this.entityKey === 'adminUnit'){
      this.adminUnitService.saveAdminUnit(this.entityForm.getRawValue()).subscribe(_ => {
        this._router.navigate(['/home'])
      })
    }
  }

  cancel = () => {
    this._router.navigate(['/home'])
  }

}
