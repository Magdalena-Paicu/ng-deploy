import { Routes } from '@angular/router';
import { User2Component } from './users/user2/user2.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  {
    path: 'detail-user/:id',
    providers: [UsersComponent],
    loadComponent: () =>
      import('../app/users/user1/user1.component').then(
        (mod) => mod.User1Component
      ),
  },

  {
    path: 'edit-user/:id',
    component: User2Component,
    providers: [UsersComponent],
  },
];
