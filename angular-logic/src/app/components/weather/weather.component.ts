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
    //this.getWeatherUpdates()
  }
  getCoordinates(){
    this.locationService.getLocation().then(pos=>
      {
         //console.log(`Positon: ${pos.lon} ${pos.lat}`);
         //console.log(pos.lat, pos.lon);
         this.locationService.weatherUpdate(pos.lat, pos.lon)
        //  this.lat = pos.lat;
        //  this.lon = pos.lon
      });

      console.log(this.lat, this.lon);
      
  }

  // getWeatherUpdates(){
  //   this.getCoordinates()
  //   this.locationService.weatherUpdate(this.lat,this.lon)

  // }

}
