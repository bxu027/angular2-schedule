System.register(["./schedule.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var schedule_component_1;
    return {
        setters:[
            function (schedule_component_1_1) {
                schedule_component_1 = schedule_component_1_1;
            }],
        execute: function() {
            describe("Schedule class test", function () {
                describe("Use default constructor to create a new Schedule", function () {
                    it("has a constructor, and by default 40 hours totally in a week.", function () {
                        var mySchedule = new schedule_component_1.Schedule();
                        expect(mySchedule.TotalHours).toEqual(40);
                    });
                });
                describe("When I click on Monday", function () {
                    it("should have all true on Monday when select row 0.", function () {
                        var mySchedule = new schedule_component_1.Schedule();
                        mySchedule.SelectRow(0);
                        for (var i = 0; i < 24; i++) {
                            expect(mySchedule.WH[i].Work).toEqual(true);
                        }
                    });
                });
                describe("When I click on 9 o'clock", function () {
                    it("should have all false on 9 o'clock everyday when select column 9.", function () {
                        var mySchedule = new schedule_component_1.Schedule();
                        mySchedule.SelectColumn(9);
                        for (var i = 0; i < 7; i++) {
                            expect(mySchedule.WH[i * 24 + 9].Work).toEqual(false);
                        }
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=schedule.test.js.map