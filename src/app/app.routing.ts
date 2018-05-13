import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'articles/:id',
    component: ReadComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
