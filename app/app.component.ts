import {Component } from 'angular2/core';
import {Schedule} from './schedule.component';
import {NgClass} from "angular2/common";
import {ScheduleService} from './schedule.service';

@Component({
    selector: 'my-app',
    templateUrl: 'src/AppComponent.html',
    directives: [NgClass],
    providers: [ScheduleService]
})

export class AppComponent {

    public HttpLoading: boolean = false;
    public HttpSaving : boolean = false;

    constructor(scheduleService: ScheduleService){
        this.MyScheduleService = scheduleService;
    }

    private MyScheduleService : ScheduleService;
    public MySchedule : Schedule = new Schedule();

    GetSchedule() {
        this.HttpLoading = true;
        this.MySchedule = new Schedule();
        this.MyScheduleService.GetSchedule()
            .subscribe(
                data => { this.MySchedule.WH = data.WH ; },
                err => console.error(err),
                () => this.HttpLoading = false
            );
    }

    ResetSchedule(){
        this.MySchedule = this.MyScheduleService.ResetSchedule();
    }

    SaveSchedule() {
        this.HttpSaving = true;
        this.MyScheduleService.SaveSchedule(this.MySchedule)
            .subscribe(
                data => console.log(data),
                err => console.error(err),
                () => this.HttpSaving = false
            );
    }
}