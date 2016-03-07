export class Schedule {
    private _schedule : string[];

    constructor (arr: string[]){
        this._schedule = arr;
    }

    get Schedule (): string[] {
        return this._schedule;
    }

    set Schedule (arr : string[]) {
        this._schedule = arr;
    }

    ConvertToArray(ind: number) {
        var arr : string[] = [];
        for(var i: number = 0; i < this._schedule[ind].length; i++){
            arr.push(this._schedule[ind][i]);
        }
        return arr;
    };

    getTotalNumber(){
        return 0;

    };
}