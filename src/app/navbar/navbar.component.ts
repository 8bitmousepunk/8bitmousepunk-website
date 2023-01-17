import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo = 'assets/kraken.svg';

  navItems = [
    { title: 'Home', path: ['/home'], isActive: true },
    { title: 'My works', path: ['/myworks'], isActive: false },
    { title: 'Contact me', path: ['/contact'], isActive: false },
  ]

  externalLinks = [
    { path: 'https://github.com/8bitmousepunk', iconClass: 'icon-github' },
    { path: 'https://www.linkedin.com/in/artem-anashchenkov/', iconClass: 'icon-linkedin' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
