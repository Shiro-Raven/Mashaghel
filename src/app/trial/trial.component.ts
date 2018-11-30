import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {
  title = 'Test Map';
  lat: number = 30.0560109;
  lng: number = 31.2221738;
  zoom: number = 14.24;

  constructor() { }

  ngOnInit() {
  }

  test(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
}
