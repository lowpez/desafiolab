import Cliente from './src/Cliente.js';
import Impuesto from './src/Impuesto.js';

// Lineas 1-2: Se importan las Classes (y sus modulos) mediante archivos Js's externos.

let impuesto1 = new Impuesto(500000, 20000); // (montoBrutoAnual, deducciones)
let cliente1 = new Cliente('Tim Berners-Lee', impuesto1); // (nombre, impuesto)

// Lineas 6-7: Se crean/inicializan los objetos con parametros, sin acceder directamente (const cliente, const impuesto).

/**
 * El resultado lo muestro en la consola accediendo al nombre del cliente y usando el metodo getter. 
 * Tiene la sintaxis: Objeto1 = new Classe(constructor dentro de la classe Cliente).
 * 
 * calcularImpuesto() = (montoBrutoAnual - deducciones) * 0.21
 */

console.log(`El cliente ${cliente1.nombre} debe pagar un impuesto de: ${cliente1.calcularImpuesto()}`);

/**
 * Trabajar con classes puede ser mas tedioso y extenso de construir, 
 * pero nos deja un gran beneficio cuando pensamos en crear un proyecto 
 * mas complejo que solo un formulario de contacto :)
 */