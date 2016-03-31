System.register(['angular2/core', './schedule.component', "angular2/common", './schedule.service'], function(exports_1, context_1) {
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
    var core_1, schedule_component_1, common_1, schedule_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (schedule_component_1_1) {
                schedule_component_1 = schedule_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (schedule_service_1_1) {
                schedule_service_1 = schedule_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(scheduleService) {
                    this.HttpLoading = false;
                    this.HttpSaving = false;
                    this.MySchedule = new schedule_component_1.Schedule();
                    this.MyScheduleService = scheduleService;
                }
                AppComponent.prototype.GetSchedule = function () {
                    var _this = this;
                    this.HttpLoading = true;
                    this.MySchedule = new schedule_component_1.Schedule();
                    this.MyScheduleService.GetSchedule()
                        .subscribe(function (data) { _this.MySchedule.WH = data.WH; }, function (err) { return console.error(err); }, function () { return _this.HttpLoading = false; });
                };
                AppComponent.prototype.ResetSchedule = function () {
                    this.MySchedule = this.MyScheduleService.ResetSchedule();
                };
                AppComponent.prototype.SaveSchedule = function () {
                    var _this = this;
                    this.HttpSaving = true;
                    this.MyScheduleService.SaveSchedule(this.MySchedule)
                        .subscribe(function (data) { return console.log(data); }, function (err) { return console.error(err); }, function () { return _this.HttpSaving = false; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'src/AppComponent.html',
                        directives: [common_1.NgClass],
                        providers: [schedule_service_1.ScheduleService]
                    }), 
                    __metadata('design:paramtypes', [schedule_service_1.ScheduleService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map