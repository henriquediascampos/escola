import { Component } from '@angular/core';
import { CustomIconsService } from './customize/custom-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'escola';

  constructor(customIconsService: CustomIconsService) {  }
}
