import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-converted',
  templateUrl: './temp-converted.component.html',
  styleUrls: ['./temp-converted.component.css']
})
export class TempConvertedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  celsius: number = 0;
  fahrenheit: number = 32;

  convertTemperature(source: string) {
    console.log(source);
    if (source === 'celsius') {
      this.fahrenheit = this.celsius * 1.8 + 32;
    } else if (source === 'fahrenheit') {
      this.celsius = (this.fahrenheit - 32) / 1.8;
    }
  }

}
