
export class WHour{
    Day: number;
    Hour: number;
    Work: boolean;
    constructor(d: number, h: number, work: boolean){
        this.Day = d;
        this.Hour = h;
        this.Work = work;
    }
}

export class Point{
    X : number;
    Y : number;
    constructor(x: number, y: number){
        this.X = x; this.Y = y;
    }
}

export class Schedule {
    public WH : WHour[];
    private Hours : number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    public WeekDays: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    public BeginPoint : Point;
    public EndPoint: Point;

    get TotalHours (): number {
        var _totalHours : number = 0;
        for (var i: number = 0 ; i < this.WH.length; i++){
            if (this.WH[i].Work){
                _totalHours++;
            }
        }
        return _totalHours;
    }

    constructor() {
        this.WH = [];
         for(var day : number = 0; day < this.WeekDays.length; day++){
            for (var hour of this.Hours) {
                if (day >= 5 || (day <5 && hour < 9) || (day < 5 && hour >= 17)){
                    this.WH.push(new WHour(day, hour, false));
                }
                else{
                    this.WH.push(new WHour(day, hour, true));
                }
            }
        }
    }

    DragBegin(i: number, j: number){
        this.BeginPoint = new Point(i, j);
        console.log(this.BeginPoint);
        event.preventDefault();
    }

    DragEnd(i: number, j: number){
        this.EndPoint = new Point(i, j);
        var p1: Point = new Point(this.BeginPoint.X >= this.EndPoint.X ? this.BeginPoint.X : this.EndPoint.X ,
            this.BeginPoint.Y >= this.EndPoint.Y ? this.BeginPoint.Y : this.EndPoint.Y );
        var p2: Point = new Point(this.BeginPoint.X < this.EndPoint.X ? this.BeginPoint.X : this.EndPoint.X ,
            this.BeginPoint.Y < this.EndPoint.Y ? this.BeginPoint.Y : this.EndPoint.Y );
        this.Calculate(p2, p1);
    }

    SelectRow(rowIndex: number){
        this.BeginPoint = new Point(rowIndex, 0);
        this.EndPoint = new Point(rowIndex, 23);
        this.Calculate(this.BeginPoint, this.EndPoint);
    }

    SelectColumn(columnIndex : number){
        this.BeginPoint = new Point(0, columnIndex);
        this.EndPoint = new Point(6, columnIndex);
        this.Calculate(this.BeginPoint, this.EndPoint);
    }

    Calculate(p1: Point , p2: Point){
        var display: boolean = !this.WH[p1.X*24+p1.Y].Work;
        for(var i: number = p1.X; i <= p2.X; i++){
            for (var j: number = p1.Y; j <= p2.Y; j++){
                this.WH[i*24+j].Work = display;
            }
        }
    }



}
