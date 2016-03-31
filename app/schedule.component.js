System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WHour, Point, Schedule;
    return {
        setters:[],
        execute: function() {
            WHour = (function () {
                function WHour(d, h, work) {
                    this.Day = d;
                    this.Hour = h;
                    this.Work = work;
                }
                return WHour;
            }());
            exports_1("WHour", WHour);
            Point = (function () {
                function Point(x, y) {
                    this.X = x;
                    this.Y = y;
                }
                return Point;
            }());
            exports_1("Point", Point);
            Schedule = (function () {
                function Schedule() {
                    this.Hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
                    this.WeekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                    this.WH = [];
                    for (var day = 0; day < this.WeekDays.length; day++) {
                        for (var _i = 0, _a = this.Hours; _i < _a.length; _i++) {
                            var hour = _a[_i];
                            if (day >= 5 || (day < 5 && hour < 9) || (day < 5 && hour >= 17)) {
                                this.WH.push(new WHour(day, hour, false));
                            }
                            else {
                                this.WH.push(new WHour(day, hour, true));
                            }
                        }
                    }
                }
                Object.defineProperty(Schedule.prototype, "TotalHours", {
                    get: function () {
                        var _totalHours = 0;
                        for (var i = 0; i < this.WH.length; i++) {
                            if (this.WH[i].Work) {
                                _totalHours++;
                            }
                        }
                        return _totalHours;
                    },
                    enumerable: true,
                    configurable: true
                });
                Schedule.prototype.DragBegin = function (i, j) {
                    this.BeginPoint = new Point(i, j);
                    console.log(this.BeginPoint);
                    event.preventDefault();
                };
                Schedule.prototype.DragEnd = function (i, j) {
                    this.EndPoint = new Point(i, j);
                    var p1 = new Point(this.BeginPoint.X >= this.EndPoint.X ? this.BeginPoint.X : this.EndPoint.X, this.BeginPoint.Y >= this.EndPoint.Y ? this.BeginPoint.Y : this.EndPoint.Y);
                    var p2 = new Point(this.BeginPoint.X < this.EndPoint.X ? this.BeginPoint.X : this.EndPoint.X, this.BeginPoint.Y < this.EndPoint.Y ? this.BeginPoint.Y : this.EndPoint.Y);
                    this.Calculate(p2, p1);
                };
                Schedule.prototype.SelectRow = function (rowIndex) {
                    this.BeginPoint = new Point(rowIndex, 0);
                    this.EndPoint = new Point(rowIndex, 23);
                    this.Calculate(this.BeginPoint, this.EndPoint);
                };
                Schedule.prototype.SelectColumn = function (columnIndex) {
                    this.BeginPoint = new Point(0, columnIndex);
                    this.EndPoint = new Point(6, columnIndex);
                    this.Calculate(this.BeginPoint, this.EndPoint);
                };
                Schedule.prototype.Calculate = function (p1, p2) {
                    var display = !this.WH[p1.X * 24 + p1.Y].Work;
                    for (var i = p1.X; i <= p2.X; i++) {
                        for (var j = p1.Y; j <= p2.Y; j++) {
                            this.WH[i * 24 + j].Work = display;
                        }
                    }
                };
                return Schedule;
            }());
            exports_1("Schedule", Schedule);
        }
    }
});
//# sourceMappingURL=schedule.component.js.map