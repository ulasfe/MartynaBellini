import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  imports: [NgFor, NgIf],
  standalone: true
})
export class GalleryComponent {
  filters = ['All', 'Live', 'Studio', 'Nature'];
  activeFilter = 'All';
  lightboxOpen = false;
  lightboxIndex = 0;
  imgLoading = false; 

  photos = [
    { id: 1, category: 'Live', caption: 'Warsaw Jazz Club — Spring 2024', src: 'gallery/1.jpg' },
    { id: 2, category: 'Live', caption: 'Warsaw Jazz Club — Spring 2024', src: 'gallery/2.jpg' },
    { id: 3, category: 'Live', caption: 'Warsaw Jazz Club — Spring 2024', src: 'gallery/3.jpg' },
    { id: 4, category: 'Live', caption: 'Warsaw Jazz Club — Spring 2024', src: 'gallery/4.jpg' },
    { id: 5, category: 'Live', caption: 'Warsaw Jazz Club — Spring 2024', src: 'gallery/5.jpg' },
    { id: 6, category: 'Live', caption: 'Warsaw Jazz Club — Spring 2024', src: 'gallery/6.jpg' },
    { id: 7, category: 'Live', caption: 'Warsaw Jazz Club — Spring 2024', src: 'gallery/7.jpg' },
    { id: 8, category: 'Live', caption: 'Warsaw Jazz Club — Spring 2024', src: 'gallery/8.jpg' },
    { id: 9, category: 'Live', caption: 'Warsaw Jazz Club — Spring 2024', src: 'gallery/9.jpg' },
  ];

  get filtered() {
    return this.activeFilter === 'All'
      ? this.photos
      : this.photos.filter(p => p.category === this.activeFilter);
  }

  openLightbox(photo: any) {
    this.lightboxIndex = this.filtered.indexOf(photo);
    this.lightboxOpen = true;
     this.imgLoading = true; 
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  prev() {
    this.lightboxIndex = (this.lightboxIndex - 1 + this.filtered.length) % this.filtered.length;
    this.imgLoading = true; 
  }

  next() {
    this.lightboxIndex = (this.lightboxIndex + 1) % this.filtered.length;
    this.imgLoading = true; 
  }

  get currentPhoto() {
    return this.filtered[this.lightboxIndex];
  }
}
