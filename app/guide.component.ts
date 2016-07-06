import {Component} from '@angular/core';

@Component({
    selector: 'guide',
    templateUrl: 'app/guide.component.html',
})

export class GuideComponent {

    city: string;

    constructor() {
        this.city = 'London'
    }

}
