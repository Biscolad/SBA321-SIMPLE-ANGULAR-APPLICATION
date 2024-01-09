import { Component } from '@angular/core';

@Component({
  selector: 'app-city-search',
  // standalone: true,
  // imports: [],
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})

export class CitySearchComponent {
  cities: string[] = ['New York', 'London', 'Tokyo'];

  isHighlighted: boolean = false;


   

}
