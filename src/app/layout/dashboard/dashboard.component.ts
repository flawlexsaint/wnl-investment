import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  options: AnimationOptions = {
    path: 'https://assets10.lottiefiles.com/private_files/lf30_igfaivqx.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    // console.log(animationItem);
  }
}
