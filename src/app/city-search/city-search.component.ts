import { Component } from '@angular/core';

@Component({
  selector: 'app-city-search',
  // standalone: true,
  // imports: [],
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})

export class CitySearchComponent {
  cityName: string = '';
   // Example two-way data binding
   selectedCity: string = '';

}
