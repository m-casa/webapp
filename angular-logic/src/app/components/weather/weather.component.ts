import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service'
import { weatherInf } from '../../interfaces/weather'
import { } from 'rxjs'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weatherDetails : weatherInf = null
  date = new Date()
  dayName = this.date.toLocaleString('en-us', {weekday:'long'});
  weatherIconClass = {
    cloudy : "https://thumbs.gfycat.com/RapidDimEider.webp",
    sunny : "https://thumbs.gfycat.com/FlawedDistantBrocketdeer.webp",
    rainy: "https://media4.giphy.com/media/MDaMURfqSp7H1mQ1Ga/giphy.gif",
    drizzle : "https://media1.giphy.com/media/MDaMURfqSp7H1mQ1Ga/giphy.gif",
    thunderstorm: "https://media3.giphy.com/media/VJq6ahBLV6O3lR8SB5/giphy.gif",
    snow: "https://thumbs.gfycat.com/KeyPeriodicArmednylonshrimp-max-1mb.gif",
    other : "https://media4.giphy.com/media/fBDHEIhKGNveDbdiHn/giphy.gif"

  }

  dailyWeather = []
  
  
  constructor( private locationService: LocationService) { }

  ngOnInit(): void {
    this.getCoordinates()
  }

  getCoordinates(){
    this.locationService.getLocation().then(pos=>
      {
        this.locationService.getWeatherUpdate(pos.lat, pos.lon).subscribe((res: weatherInf) =>{
          
          this.weatherDetails = res
          this.getDailyWeather()
        })
      })

  };

  getDailyWeather(){
    this.dailyWeather = this.locationService.getDailyWeather(this.weatherDetails, this.dailyWeather)
  }


  getWeatherIcon(weatherID){
    return this.locationService.getWeatherIcon(weatherID, this.weatherIconClass)
  }
  
  
}
