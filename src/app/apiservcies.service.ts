import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiservciesService {

  constructor(private _HttpClient :HttpClient ) { }

//   ApiKey:string ='';

//   getData():Observable<any>{
//     this.ApiKey = '2efd911b101451204e6877d669fadf8a';
//     return this._HttpClient.get('https://open-weather-map27.p.rapidapi.com/weather')
//     // console.log(this._HttpClient.get('https://open-weather-map27.p.rapidapi.com/weather'))
// 2efd911b101451204e6877d669fadf8a

//   }


  userName = "michael ramzy";
}
