import {Component} from '@angular/core';

import { GuideComponent } from './guide.component'
import { PlacesComponent } from './places.component';
//import { FeedbackComponent } from './feedback.component';
//import { ContactComponent } from './contact.component';

@Component({
    selector: 'my-app',
    template: `
  <guide></guide>
  <places></places>
  <!-- <feedback></feedback> -->
  <!-- <contact></contact> -->
	`,
    directives: [GuideComponent , PlacesComponent /*, FeedbackComponent, ContactComponent*/]
})
export class AppComponent { }
