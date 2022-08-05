import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  panelOpenState = false;
  services: Array<any> = [
    {
      icon: 'assets/img/Home.svg',
      header: 'Store Assets',
      body: 'We plan to store 5000 kegs of palm oil from june to September/December depending on the market',
    },
    {
      icon: 'assets/img/Report.svg',
      header: 'Target Price',
      body: 'Our target price is N30,000, however we expect prices as high as N35,000.',
    },
    {
      icon: 'assets/img/Reaction.svg',
      header: 'All Inclusive',
      body: 'This investment is open to the public at N23,000 per 25ltr keg. This price includes transport, storage costs, security/surveillance, maintenance and insurance.',
    },
    {
      icon: 'assets/img/User-check.svg',
      header: 'Management',
      body: 'WNL will collect investment management fees amount to 30% of total profits. In return you get secure management',
    },
  ];
  accordion: Array<any> = [
    'How does it work',
    'How to start with investing',
    'Do you offer risk mitigation',
    'When can i start seeing returns',
    'Whats the maximum investments',
  ];

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
  ];

  constructor() {}

  ngOnInit(): void {}
}
