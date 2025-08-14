/**
 * Sea un salón de clases en el DCyT, donde se procesan los datos de cada estudiante (nombre, 
edad y sexo). El dato sexo es una letra F o M (femenino - masculino). Se desean procesar estos 
registros de estudiantes para determinar: a. la edad promedio, b. el nombre del estudiante con 
mayor edad, c. el porcentaje de chicas que son mayor de edad. 
El profesor informa que si asisten Luis (16), Ana (19), José (20) y Carmen (18), la salida 
requerida presenta el siguiente formato: 
Edad promedio: 18.25 
Estudiante con mayor edad: José 
Porcentaje de chicas mayor de edad: 100%
 */

import Cl_estudiante from "./Cl_estudiante.js";
import Cl_salon from "./Cl_salon.js";

let salon = new Cl_salon();

salon.procesarEstudiante(new Cl_estudiante("Luis", 16, "M"));
salon.procesarEstudiante(new Cl_estudiante("Ana", 19, "F"));
salon.procesarEstudiante(new Cl_estudiante("José", 20, "M"));
salon.procesarEstudiante(new Cl_estudiante("Carmen", 18, "F"));

console.log("Edad promedio: " + salon.promedioEdad().toFixed(2)); // 18.25
console.log("Estudiante con mayor edad: " + salon.nombreMayor()); // José
console.log("Porcentaje de chicas mayor de edad: " + salon.porcentajeMayChica() + "%"); // 100%

let salida: HTMLElement | null = document.getElementById("salida");
if (salida) {
    salida.innerHTML = `
        Edad promedio: ${salon.promedioEdad().toFixed(2)}<br>
        Estudiante con mayor edad: ${salon.nombreMayor()}<br>
        Porcentaje de chicas mayor de edad: ${salon.porcentajeMayChica()}%
    `;
}   