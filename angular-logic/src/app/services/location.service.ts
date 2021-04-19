import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

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


  weatherUpdate(lat, lon){

    return this.http.get("http://localhost:3000/weather?lat=" + lat + "&lon=" + lon).subscribe((response: any) =>{
      console.log(response);
      
      return response
    })
    
  }


}
