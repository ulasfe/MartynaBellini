import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './pages/main/main.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      { path: '', component: MainComponent },
      {
        path: 'music',
        loadComponent: () => import('./pages/music/music.component').then(m => m.MusicComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
      },
      { path: '404', component: ErrorComponent },
      { path: '**', component: ErrorComponent }
    ]
  }
];
