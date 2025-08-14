import Cl_estudiante from "./Cl_estudiante";

export default class Cl_salon {
 private acEdad: number = 0;
 private cntPersona: number = 0;
 private mayEdad: number = 0;
 private nombreMayorEdad: string = "";
 private cntMayChica: number =0;
 private cntChica: number = 0;
 constructor() {}

procesarEstudiante(estudiante: Cl_estudiante): void {
  this.acEdad += estudiante.edad;
  this.cntPersona++;
  if (estudiante.edad > this.mayEdad) {
    this.mayEdad = estudiante.edad;
    this.nombreMayorEdad = estudiante.nombre;
  }
  this.cntMayChica += (estudiante.sexo == "F" && estudiante.edad >= 18) ? 1 : 0;
  this.cntChica += (estudiante.sexo == "F") ? 1 : 0;
}
 promedioEdad(): number {
  return this.acEdad / this.cntPersona;
 }

 nombreMayor(): string {
  return this.nombreMayorEdad;
 }

 porcentajeMayChica(): number {
  return (this.cntMayChica * 100) / this.cntChica;
 }
 
}