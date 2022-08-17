import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  transactions: Array<any> = [1, 2, 3, 4];

  constructor(private _router: Router) {}

  goto(id: any) {
    this._router.navigate([`/dashboard/transaction-history/${id}`]);
  }
  ngOnInit(): void {}
}
