import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { User1Component } from './users/user1/user1.component';
import { User2Component } from './users/user2/user2.component';
import { HomePageComponent } from './home-page/home-page.component';
import { routes as userRoutes } from './children.routes';

export const routes: Routes = [
  {
    path: 'vehicles',
    component: VehiclesComponent,

    children: [
      {
        path: 'detail-vehicle/:id',
        component: User1Component,
      },
      {
        path: 'edit-vehicle/:id',
        component: User2Component,
      },
    ],
  },

  {
    path: 'users',
    component: UsersComponent,
    providers: [UsersComponent],
    children: userRoutes,
  },

  {
    path: 'detail-vehicle/:id',
    component: User1Component,
  },
  {
    path: 'edit-vehicle/:id',
    component: User2Component,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
];
