import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherInf } from '../interfaces/weather'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  w: weatherInf = null


  constructor(private http: HttpClient) { }

  getLocation(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lon: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }


  getWeatherUpdate(lat, lon): Observable<weatherInf>{
    
    return this.http.get<weatherInf>("http://localhost:3000/weather?lat=" + lat + "&lon=" + lon).pipe(map((response: weatherInf) => response as weatherInf))
     }
  
  getDailyWeather(weatherDetails, dailyWeather){

    for(let i = 0 ; i < weatherDetails.daily.length-4 ; i++){
      var eachDay =  weatherDetails.daily[i]
      var day = new Date(eachDay.dt * 1000).toLocaleString('en-us', {weekday:'long'}).slice(0,3)
      dailyWeather.push([day, eachDay.temp.day, eachDay.weather[0].icon])
    }
    
    return dailyWeather
    
    
  }

  getWeatherIcon(weatherID, weatherIconClass){
    var classList = ''

    //console.log(Math.floor(weatherID/100));
    
    if(weatherID  === 800){
      classList = weatherIconClass.sunny
    }

    else if ( Math.floor(weatherID/100) == 2){
      
      classList = weatherIconClass.thunderstorm
    }

    else if ( Math.floor(weatherID/100) == 3){
      
      classList = weatherIconClass.drizzle
    }
    else if ( Math.floor(weatherID/100) == 5){
      
      classList = weatherIconClass.rainy
    }
    
    else if ( Math.floor(weatherID/100) == 6){
      
      classList = weatherIconClass.snow
    }
    else if ( Math.floor(weatherID/100) == 8){
      
      classList = weatherIconClass.cloudy
    }

    else {
      classList = weatherIconClass.other
    }

    return classList
  }


}
