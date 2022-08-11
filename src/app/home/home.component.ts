import { Component, OnInit } from '@angular/core';
import {ApiservciesService} from '../apiservcies.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _ApiservciesService : ApiservciesService) { }

  weatherData :any;
  maintemp:number = 0;
  humidity:number = 0;
  maxTemp:number =0;

  getWeatherDat() {
    let data = JSON.parse('{"coord":{"lon":139,"lat":35},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":297.77,"feels_like":298.4,"temp_min":297.77,"temp_max":297.77,"pressure":1009,"humidity":81},"visibility":10000,"wind":{"speed":0.45,"deg":184,"gust":0.89},"clouds":{"all":60},"dt":1660077407,"sys":{"type":2,"id":2019346,"country":"JP","sunrise":1660075189,"sunset":1660124350},"timezone":32400,"id":1851632,"name":"Shuzenji","cod":200}')
    console.log(data.wind.speed)
    this.weatherData = data;
    this.maintemp = Math.round(this.weatherData.main.temp - 273.15)
    this.humidity = this.weatherData.main.humidity
    this.maxTemp = Math.round(this.weatherData.main.temp_max - 273.15)
  }





  ngOnInit(): void {

  this.getWeatherDat()

  // this._ApiservciesService.getData().subscribe(
  //   {
  //     next: (data)=> {
  //       console.log(data)
  //     },
  //     error: (err) =>{
  //       console.log(err)
  //     }
  //   }
  //   )
  }

}
