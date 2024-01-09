import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitySearchComponent } from './city-search/city-search.component';
import { CityDetailComponent } from './city-detail/city-detail.component';

const routes: Routes = [
  { path: 'search', component: CitySearchComponent },
  { path: 'detail/:id', component: CityDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}