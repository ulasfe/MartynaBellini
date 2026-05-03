import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [NgFor, RouterLink],
  standalone: true
})
export class MainComponent {
  tracks = [
    { num: '01', title: 'Morning Mist', type: 'Original · Acoustic', youtube: 'https://youtube.com', spotify: 'https://open.spotify.com' },
    { num: '02', title: 'Autumn Road', type: 'Original · Fingerstyle', youtube: 'https://youtube.com', spotify: 'https://open.spotify.com' },
    { num: '03', title: 'Still Waters', type: 'Cover · Acoustic', youtube: 'https://youtube.com', spotify: 'https://open.spotify.com' },
    { num: '04', title: 'Golden Hour', type: 'Live Session', youtube: 'https://youtube.com', spotify: 'https://open.spotify.com' },
  ];
}
