import { Component,inject } from '@angular/core';
import { Router,RouterOutlet,NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  imports: [RouterOutlet],
  standalone: true
})
export class AppComponent {
   private router = inject(Router);

   constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
