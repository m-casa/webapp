import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  lat: any = null
  lon: any = null

  constructor( private locationService: LocationService) { }

  ngOnInit(): void {
    this.getCoordinates()
  }
  getCoordinates(){
    this.locationService.getLocation().then(pos=>
      {
         this.locationService.weatherUpdate(pos.lat, pos.lon)
      });  
  }

}
