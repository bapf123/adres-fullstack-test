import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  buttons = [
    {
      label: 'Ver adquisiciones',
      route: '/acquisitions',
      icon: 'assets/search.svg'
    },
    {
      label: 'Crear adquisición',
      route: '/acquisition',
      icon: 'assets/add.svg'
    },
    {
      label: 'Crear proveedor',
      route: '/create-entity',
      params: { entity: 'supplier' },
      icon: 'assets/add_supplier.svg'
    },
    {
      label: 'Crear unidad administrativa',
      route: '/create-entity',
      params: { entity: 'adminUnit' },
      icon: 'assets/add_admin.svg'
    }
  ]

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onCardClicked = (button: any) => {
    this._router.navigate([button.route], { queryParams: button.params || {} })
  }

}
