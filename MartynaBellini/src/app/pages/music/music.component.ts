import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  imports: [NgFor],
  standalone: true
})
export class MusicComponent {
  filters = ['All', 'Originals', 'Covers', 'Live'];
  activeFilter = 'All';
  youtubeUrl = 'https://www.youtube.com/@martynabellini';
  spotifyUrl = 'https://open.spotify.com/artist/1aKuIByKfw2VlUh2SUdlQS?si=6kBnFT2USvKIm6skMAS1TQ&nd=1&dlsi=e71eca5d618642ed';
  tracks = [
    { num: '01', title: 'Wroclove', type: 'Original', year: '2020', duration: '3:43', category: 'Originals', youtube: 'https://youtu.be/k4-Nd3mlOqI?si=LHp_e1C4r7Uqlh5h', spotify: 'https://open.spotify.com/track/5P3QUwmufcl1FfpuaecvzL?si=0a13e31869aa44b6' },
    { num: '02', title: 'Już Nigdy', type: 'Covers', year: '2017', duration: '4:22', category: 'Covers', youtube: 'https://youtu.be/ysdsfnSAYPI?si=xdoCmC6AGztKOC-m',  sportify: 'https://open.spotify.com/track/4J7B4QMStJHyqCiZ8wHObT?si=5ccd9ae2a4bd4860' },
    { num: '03', title: 'It Aint Me Babe', type: 'Live', year: '2025', duration: '4:38', category: 'Live', youtube: 'https://www.youtube.com/watch?v=TLqncnZU3Mo&t=1397&authuser=0' },
  ];

  filteredTracks() {
    if (this.activeFilter === 'All') return this.tracks;
    return this.tracks.filter(t => t.category === this.activeFilter);
  }
}
