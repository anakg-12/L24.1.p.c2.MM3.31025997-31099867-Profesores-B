export default class CL_profesor{
    constructor(bono,nombre){
        this.bono=bono;
        this.nombre=nombre;
    }
    set bono(b){
        this._bono= +b;
    }
    get bono(){
        return this._bono;
    }
    set nombre(n){
        this._nombre=n;
    }
    get nombre(){
        return this._nombre;
    }
    
}