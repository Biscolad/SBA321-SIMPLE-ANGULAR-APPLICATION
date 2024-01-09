import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { CitySearchComponent } from './city-search/city-search.component';
import { CityDetailComponent } from './city-detail/city-detail.component';

const routes: Routes = [
  { path: 'search', component: CitySearchComponent },
  { path: 'detail/:id', component: CityDetailComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
