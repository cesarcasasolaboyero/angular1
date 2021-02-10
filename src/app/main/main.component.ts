import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <p ngClass="title">
      Prueba Angular
    </p>
  `,
  styles: [`
  `],
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
