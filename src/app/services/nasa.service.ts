import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  constructor(private http: HttpClient) { }
  getImageOfTheDay() {
    return this.http.get<any>('https://api.nasa.gov/planetary/apod?api_key=PqXbxTg1TlRQCfwlVqC8pvRobytiaWmRTvtLb8Pu')

  }

}

