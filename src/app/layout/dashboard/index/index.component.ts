import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  investments: Array<any> = [
    {
      src: 'assets/img/investment-1.svg',
      name: 'Palm Oil',
      expiration: 'Expires: 20/03/2022',
    },
    {
      src: 'assets/img/investment-2.svg',
      name: 'Palm Oil',
      expiration: 'Expires: 20/03/2022',
    },
    {
      src: 'assets/img/investment-3.svg',
      name: 'Palm Oil',
      expiration: 'Expires: 20/03/2022',
    },
    {
      src: 'assets/img/investment-4.svg',
      name: 'Palm Oil',
      expiration: 'Expires: 20/03/2022',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
