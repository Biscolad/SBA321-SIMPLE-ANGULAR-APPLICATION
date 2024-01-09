import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

// import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';

import { CitySearchComponent } from './city-search/city-search.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { UnderlineDirective } from './underline.directive';

// const routes: Routes = [
//   { path: 'search', component: CitySearchComponent },
//   { path: 'detail/:id', component: CityDetailComponent },
// ];

@NgModule({
  declarations: [
    CitySearchComponent,
    CityDetailComponent,
    UnderlineDirective,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
  ],

  providers: [],
  bootstrap: [],

})

export class AppModule { }


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}