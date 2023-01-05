import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items = [
    { title: 'Home', link: '#', isActive: true },
    { title: 'Portfolio', link: '#', isActive: false },
    { title: 'Contact me', link: '#', isActive: false },
  ]

  externalLinks = [
    { url: 'https://github.com/sir13tommy', icon: '/assets/github.svg' },
    { url: 'https://www.linkedin.com/in/artem-anashchenkov/', icon: '/assets/linkedin.svg' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
