import { Component, OnInit } from '@angular/core';
import { BIO } from './home.text';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profilePath = 'assets/profile.jpg';
  resumePath = 'assets/artem_anashchenkov_dev_ua.pdf';
  saveIconPath = 'assets/save.svg';
  bio = BIO.trim();

  languages = [
    { iconClass: 'icon-js' },
    { iconClass: 'icon-html' },
    { iconClass: 'icon-css' },
    { iconClass: 'icon-ts' },
    { iconClass: 'icon-c' },
    { iconClass: 'icon-cplusplus' },
    { iconClass: 'icon-asm' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
