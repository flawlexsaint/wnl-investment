import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss'],
})
export class WithdrawComponent implements OnInit {
  stepOne: boolean = true;
  transactionDetail: Array<any> = [
    {
      key: 'Bank Name',
      value: 'Wema Bank',
    },
    {
      key: 'Bank Account Number',
      value: '1234567890',
    },
    {
      key: "Account Holder's Name",
      value: 'WNL Investments',
    },
    {
      key: 'Amount',
      value: 'N25,000',
    },
    {
      key: 'Fee',
      value: 'N50',
    },
    {
      key: 'Wallet',
      value: 'WNL',
    },
    {
      key: 'From Currency',
      value: 'NGN',
    },
    {
      key: 'To Currency',
      value: 'NGN',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  goBack() {
    window.history.back();
  }
}
