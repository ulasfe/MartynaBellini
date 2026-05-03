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
    { num: '01', title: 'Morning Mist', type: 'Original', year: '2024', duration: '3:42', category: 'Originals', youtube: 'https://youtube.com', spotify: 'https://open.spotify.com' },
    { num: '02', title: 'Autumn Road', type: 'Original · Fingerstyle', year: '2024', duration: '4:15', category: 'Originals', youtube: 'https://youtube.com', spotify: 'https://open.spotify.com' },
    { num: '03', title: 'Still Waters', type: 'Cover', year: '2023', duration: '3:58', category: 'Covers', youtube: 'https://youtube.com', spotify: 'https://open.spotify.com' },
    { num: '04', title: 'Golden Hour', type: 'Live Session', year: '2024', duration: '5:02', category: 'Live', youtube: 'https://youtube.com', spotify: 'https://open.spotify.com' },
    { num: '05', title: 'Forest Floor', type: 'Original', year: '2023', duration: '3:30', category: 'Originals', youtube: 'https://youtube.com', spotify: 'https://open.spotify.com' },
    { num: '06', title: 'River Song', type: 'Cover', year: '2023', duration: '4:10', category: 'Covers', youtube: 'https://youtube.com', spotify: 'https://open.spotify.com' },
    { num: '07', title: 'Late November', type: 'Live Session', year: '2023', duration: '6:18', category: 'Live', youtube: 'https://youtube.com', spotify: 'https://open.spotify.com' },
  ];

  filteredTracks() {
    if (this.activeFilter === 'All') return this.tracks;
    return this.tracks.filter(t => t.category === this.activeFilter);
  }
}
