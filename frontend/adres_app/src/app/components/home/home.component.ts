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
    // {
    //   label: 'Modificar adquisición',
    //   route: '/acquisition',
    //   icon: 'assets/edit.svg'
    // },
    // {
    //   label: 'Histórico',
    //   route: '/historic',
    //   icon: 'assets/history.svg'
    // }
  ]

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onCardClicked = (route: string) => {
    this._router.navigate([route])
  }

}
