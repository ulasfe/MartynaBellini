import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-slideshow',
  imports: [NgIf],
  standalone: true,
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-in',
          style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class SlideshowComponent implements OnInit {

  slides = [
    { title: '', image: '../photo1.jpg', route: '/food' },
    { title: '', image: '../photo2.jpg', route: '/food' },
    { title: '', image: '../photo3.jpg', route: '/food' }
  ];

  currentIndex = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    setInterval(() => this.next(), 3000);
  }

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.slides.length;
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }
}