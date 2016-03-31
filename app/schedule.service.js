System.register(['./schedule.component', 'angular2/http', 'rxjs/add/operator/map', 'angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var schedule_component_1, http_1, core_1;
    var ScheduleService;
    return {
        setters:[
            function (schedule_component_1_1) {
                schedule_component_1 = schedule_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_2) {}],
        execute: function() {
            ScheduleService = (function () {
                function ScheduleService(http) {
                    this.http = http;
                    this.HttpLoading = false;
                    this.Result = false;
                    this.APIUrl = 'http://localhost:51705/';
                }
                //private APIUrl : string = 'http://my892550.azurewebsites.net/';
                ScheduleService.prototype.GetSchedule = function () {
                    return this.http.get(this.APIUrl + 'api/Schedule')
                        .map(function (res) { return res.json(); });
                };
                ScheduleService.prototype.ResetSchedule = function () {
                    return new schedule_component_1.Schedule();
                };
                ScheduleService.prototype.SaveSchedule = function (schedule) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(this.APIUrl + 'api/Schedule', JSON.stringify(schedule), { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ScheduleService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ScheduleService);
                return ScheduleService;
            }());
            exports_1("ScheduleService", ScheduleService);
        }
    }
});
//# sourceMappingURL=schedule.service.js.map