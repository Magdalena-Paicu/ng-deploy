import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { UsersComponent } from './users/users.component';
import { User1Component } from './users/user1/user1.component';
import { User2Component } from './users/user2/user2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UsersComponent,
    RouterLink,
    User1Component,
    User2Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'http-requests';
  router = inject(Router);
  change: boolean = false;
  activatedRoute = inject(ActivatedRoute);
  booleanValue: boolean = true;

  changePageToUsers() {
    this.router.navigate(['/users']);
    this.change = true;
  }

  changePageToVehicles() {
    this.router.navigate(['/vehicles']);
    this.change = false;
  }

  changePage() {
    if (this.change) {
      this.changePageToVehicles();
    } else {
      this.changePageToUsers();
    }
  }

  goToVehicles() {
    this.router.navigate(['/vehicles'], { queryParams: { type: 'car' } });
  }
}
