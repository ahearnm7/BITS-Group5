import * as internal from "stream";

//Create new class Location and Constructor
export class Location {
    static find(arg0: (Location: { name: string; suburb: string; postcode: number; lastExposure: string; monthExposure: number; totalExposure: number; timeExposure: number; }) => any) {
        throw new Error("Method not implemented.");
    }
    
    private _name:string;
    private _suburb:string;
    private _postcode:number;
    private _lastExposure:string;
    private _monthExposure:number;
    private _totalExposure:number;
    private _timeExposure:number;

  

    constructor(name: string,suburb: string, postcode: number, lastExposure: string, monthExposure: number, totalExposure: number, timeExposure: number) {
        this._name = name;
        this._suburb = suburb;
        this._postcode = postcode;
        this._lastExposure = lastExposure;
        this._monthExposure = monthExposure;
        this._totalExposure = totalExposure;
        this._timeExposure = timeExposure;
    }

    public get name() {
        return this._name;
    }

    public set name(theName: string) {
        this._name = theName;
    }

    public get suburb() {
        return this._suburb;
    }

    public set suburb(theSuburb: string) {
        this._suburb = theSuburb;
    }

    public get postcode() {
        return this._postcode;
    }

    public set postcode(thePostcode: number) {
        this._postcode = thePostcode;
    }

    public get lastExposure() {
        return this._lastExposure;
    }

    public set lastExposure(theLastExposure: string) {
        this._lastExposure = theLastExposure;
    }

    public get monthExposure() {
        return this._monthExposure;
    }

    public set monthExposure(theMonthExposure: number) {
        this._monthExposure = theMonthExposure;
    }

    public get totalExposure() {
        return this._totalExposure;
    }

    public set totalExposure(theTotalExposure: number) {
        this._totalExposure = theTotalExposure;
    }

    public get timeExposure() {
        return this._timeExposure;
    }

    public set timeExposure(theTimeExposure: number) {
        this._timeExposure = theTimeExposure;
    }
}

//Array of Objects
var locations: Location[] = [
    new Location("Coles", "Northcote", 3070, "15/10/21", 5, 15, 1900),
    new Location("Bunnings", "Preston", 3072, "1/11/21", 7, 44, 1400)  
];

//Search Function
// var input: string;
// var pos: number;
// var Search = Location.find(function(Location: {
//     name: string
//     suburb: string
//     postcode: number
//     lastExposure: string
//     monthExposure: number
//     totalExposure: number
//     timeExposure: number
// }): string | undefined {
// if (Location.name = "Coles" | "Bunnings")
    
// }
// })
