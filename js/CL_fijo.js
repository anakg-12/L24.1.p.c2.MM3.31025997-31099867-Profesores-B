import CL_profesor from "./CL_profesor.js";

export default class CL_fijo extends CL_profesor{
    constructor(bono,nombre,sueldo){
        super(bono,nombre);
        this.sueldo=sueldo;
    }
    set sueldo(s){
        this._sueldo= +s;
    }
    get sueldo(){
        return this._sueldo;
    }
    sueldoTotal(){
        return this.sueldo+this.bono;
    }
    
}