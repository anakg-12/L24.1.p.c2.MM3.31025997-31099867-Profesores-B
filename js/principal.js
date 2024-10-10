/*En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
de la clase Cl_profesor.
Haga un programa que haga uso de la misma clase Cl_profesor del ejercicio anterior, lea los
datos de un profesor contratado y reporte su ingreso total. */

import CL_fijo from "./CL_fijo.js";
import CL_contratado from "./CL_contratado.js";

let contratado1 = new CL_contratado( 30,"rafael", 15);
let contratado2 = new CL_contratado( 30, "felicia", 20);

let salida= document.getElementById("Salida");

salida.innerHTML+= `
<br> nombre del profesor contratado : ${contratado1.nombre}
<br> monto del bono : ${contratado1.bono}
<br> cantidad de horas: ${contratado1.horas}
<br> ingreso total del profesor  ${contratado1.nombre}: $${contratado1.sueldoTotal()}
<br>
<br> nombre del profesor contratado : ${contratado2.nombre}
<br> monto del bono: ${contratado2.bono}
<br> cantidad de horas: ${contratado2.horas}
<br> ingreso total del profesor  ${contratado2.nombre}: $${contratado2.sueldoTotal()}
`;