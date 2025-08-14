export default class Cl_estudiante {
    private _nombre: string;
    private _edad: number;
    private _sexo: string;
    constructor(n:string, e:number, s:string) {
        this._nombre = n;
        this._edad = e;
        this._sexo = s;
    }
    set nombre(n:string) {
        this._nombre = n;
    }
    get nombre():string {
        return this._nombre;
    }
    set edad(e:number) {
        this._edad = e;
    }
    get edad():number {
        return this._edad;
    }
    set sexo(s:string) {
        this._sexo = s;
    }
    get sexo():string {
        return this._sexo;
    }
}
    