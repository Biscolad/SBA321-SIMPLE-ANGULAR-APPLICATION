import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-detail',
  // standalone: true,
  // imports: [],
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent {
  @Input() cityName: string = '';

}
