export default class Cl_salon {
    constructor() {
        this.acEdad = 0;
        this.cntPersona = 0;
        this.mayEdad = 0;
        this.nombreMayorEdad = "";
        this.cntMayChica = 0;
        this.cntChica = 0;
    }
    procesarEstudiante(estudiante) {
        this.acEdad += estudiante.edad;
        this.cntPersona++;
        if (estudiante.edad > this.mayEdad) {
            this.mayEdad = estudiante.edad;
            this.nombreMayorEdad = estudiante.nombre;
        }
        this.cntMayChica += (estudiante.sexo == "F" && estudiante.edad >= 18) ? 1 : 0;
        this.cntChica += (estudiante.sexo == "F") ? 1 : 0;
    }
    promedioEdad() {
        return this.acEdad / this.cntPersona;
    }
    nombreMayor() {
        return this.nombreMayorEdad;
    }
    porcentajeMayChica() {
        return (this.cntMayChica * 100) / this.cntChica;
    }
}
