import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profilePath = 'assets/profile.jpg';
  resumePath = 'assets/artem_anashchenkov_dev_ua.pdf';
  saveIconPath = 'assets/save.svg';

  languages = [
    { path: 'assets/html.svg' },
    { path: 'assets/js.svg' },
    { path: 'assets/css.svg' },
    { path: 'assets/c.svg' },
    { path: 'assets/c++.svg' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
