import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent { name = 'It yay!?'; }