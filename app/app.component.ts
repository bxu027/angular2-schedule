import {Component} from 'angular2/core';
import {Schedule} from './schedule.component';

@Component({
    selector: 'my-app',
    templateUrl: 'src/AppComponent.html'
})

export class AppComponent {
    public title = 'Tour of Heroes';
    public MySchedule : Schedule = new Schedule([
        "123456789012345678901234",
        "123456789012345678901234",
        "123456789012345678901234",
        "123456789012345678901234",
        "123456789012345678901234",
        "123456789012345678901234",
        "123456789012345678901234"]);
}

