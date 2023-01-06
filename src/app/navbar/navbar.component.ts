import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navItems = [
    { title: 'Home', url: ['/home'], isActive: true },
    { title: 'My works', url: ['/myworks'], isActive: false },
    { title: 'Contact me', url: ['/contact'], isActive: false },
  ]

  externalLinks = [
    { url: 'https://github.com/sir13tommy', icon: '/assets/github.svg' },
    { url: 'https://www.linkedin.com/in/artem-anashchenkov/', icon: '/assets/linkedin.svg' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
