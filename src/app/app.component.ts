import { Component, OnInit } from '@angular/core';
import { NasaService } from './services/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nasa';
  public imgOfTheDay: string = '';
  constructor(private nasaService: NasaService) { }
  ngOnInit(): any {
console.log (this.nasaService.getImageOfTheDay())
   this.nasaService.getImageOfTheDay().subscribe(resp=>{
    this.imgOfTheDay=resp.url
   })

  }

}
