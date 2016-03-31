import { Schedule } from './schedule.component';
import {Http, Response, Headers} from 'angular2/http';
import 'rxjs/add/operator/map'
import {Injectable, Inject} from 'angular2/core';
import 'rxjs/Rx';

@Injectable()
export class ScheduleService {
    constructor(@Inject(Http) private http: Http) { }

    public HttpLoading : boolean = false;

    public Result: boolean = false;

    private APIUrl: string = 'http://localhost:51705/';
    //private APIUrl : string = 'http://my892550.azurewebsites.net/';

    GetSchedule() {
        return this.http.get(this.APIUrl+ 'api/Schedule')
            .map((res:Response) => res.json());
    }

    ResetSchedule() : Schedule {
        return new Schedule();
    }

    SaveSchedule(schedule: Schedule) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.APIUrl + 'api/Schedule', JSON.stringify(schedule),{headers:headers})
            .map(res => res.json());
    }
}