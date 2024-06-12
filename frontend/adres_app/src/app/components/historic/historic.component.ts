import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/models/Transaction';
import { TRANSACTION_FIELDS } from 'src/app/models/constants';
import { AcquisitionService } from 'src/app/services/acquisition-service.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {

  currentId: number;
  transactions: Transaction[] = []
  columns = TRANSACTION_FIELDS

  constructor(
    private route: ActivatedRoute,
    private acquisitionService: AcquisitionService
  ) { 
    this.currentId = this.route.snapshot.queryParams['id']
  }

  ngOnInit(): void {
    this.getTransactions()
  }

  getTransactions = () => {
    this.acquisitionService.getTransactions(this.currentId).subscribe(data => {
      this.transactions = data
    })
  }

}
