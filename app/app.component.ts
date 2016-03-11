import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {Schedule} from './schedule.component';


@Component({
    selector: 'my-app',
    templateUrl: 'src/AppComponent.html'
})

export class AppComponent {
    public MySchedule : Schedule = new Schedule();
}

