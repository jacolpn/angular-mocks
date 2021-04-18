import { Component } from '@angular/core';

import * as data from '../assets/db.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dbJson = data.jack;
}
