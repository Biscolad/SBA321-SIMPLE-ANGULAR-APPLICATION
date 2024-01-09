import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { CitySearchComponent } from './city-search/city-search.component';
import { CityDetailComponent } from './city-detail/city-detail.component';


const routes: Routes = [
  { path: 'search', component: CitySearchComponent },
  { path: 'detail/:id', component: CityDetailComponent },
  
];


@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SBA321-SIMPLE-ANGULAR-APPLICATION';
}
