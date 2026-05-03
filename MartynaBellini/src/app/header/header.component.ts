import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule, RouterLink, RouterOutlet, RouterLinkActive],
  standalone: true
})
export class HeaderComponent {
  menuOpen = false;
}
