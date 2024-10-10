import CL_profesor from "./CL_profesor.js";
export default class CL_contratado extends CL_profesor{
    constructor(bono,nombre,horas){
        super(bono,nombre);
        this.horas=horas;
    }
    set horas(h){
        this._horas= +h;
    }
    get horas(){
        return this._horas;
    }
    sueldoTotal(){
        return (this.horas*10)+this.bono;
    }
 
    
}