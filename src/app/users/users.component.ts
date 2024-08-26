import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterOutlet, User1Component, User2Component],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users$: Observable<any[]> = new Observable<any[]>();
  error: string = '';
  completedMessage = '';
  router = inject(Router);
  activatedRouter = inject(ActivatedRoute);

  constructor(private usersService: ServiceService) {}

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
    this.usersService.getUsers().subscribe({
      next: () => {
        console.log(this.users$);
      },
      error: (err) => {
        console.log(err);
        this.completedMessage = err;
      },
      complete: () => {
        this.completedMessage = 'Aici s-a terminat observabilul';
      },
    });
  }

  edit(id: number) {
    this.router.navigate(['edit-user', id], {
      relativeTo: this.activatedRouter,
    });
  }

  detail(id: number) {
    this.router.navigate(['users/detail-user', id]);
  }
}
