import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    let scrollHeigth = 150;

    // if (window.innerWidth < 350) {
    //   scrollHeigth = 150;
    // } else if (window.innerWidth < 500 && window.innerWidth > 350) {
    //   scrollHeigth = 250;
    // } else if (window.innerWidth < 700 && window.innerWidth > 500) {
    //   scrollHeigth = 350;
    // } else if (window.innerWidth < 1000 && window.innerWidth > 700) {
    //   scrollHeigth = 500;
    // } else {
    //   scrollHeigth = 100;
    // }

    if (window.scrollY >= scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', 'white');
      document.body.style.setProperty('--navbar-text-light', '#071050');
      document.body.style.setProperty('--navbar-text-dark', '#071050');
      document.body.style.setProperty(
        '--navbar-scroll-shadow',
        '0px 6px 12px -5px #000000'
      );
    } else if (window.scrollY < scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', 'transparent');
      document.body.style.setProperty('--navbar-text-light', '#f2f2f2');
      document.body.style.setProperty('--navbar-text-dark', '#071050');
      document.body.style.setProperty('--navbar-scroll-shadow', 'none');
    }
  };
}
