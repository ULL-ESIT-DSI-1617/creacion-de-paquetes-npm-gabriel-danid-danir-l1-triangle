'use strict'

/**
* Creación de paquetes npm - Triangle
*
* https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-gabriel-danid-danir-l1-triangle
*
* Daniel Rodríguez Martín
*
* Team: gabriel-danid-danir-l1
* 
* Modulo npm con el código de la clase Triangle un método para calcular el área
* 
* @class Triangle
* @param {hash} options Ancho y Alto 
*/

let Shape = require('./shapesarea.js');

class Triangle extends Shape {
    constructor(options) {
      super(options)
    }
    /**
     * La función area calcula el área de un triángulo
     * @param hereda directamente de Shape
     * @return {number} devuelve el área de un triángulo
    */
    area() {
      return 0.5 * this.width * this.height;
    }
}
Shape.Shapes.Triangle = Triangle;
module.exports = Triangle;