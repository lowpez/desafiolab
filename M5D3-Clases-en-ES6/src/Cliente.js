import Impuesto from './Impuesto.js';

class Cliente {
  constructor(nombre, impuesto) {

    /**
     * El constructor es un método especial que se llama automáticamente cuando se crea una nueva instancia de la clase (Cliente). 
     * En este constructor, 'nombre' e 'impuesto' son parámetros que se pasan cuando se crea un nuevo cliente.
     */ 

    this._nombre = nombre; 
    this._impuesto = impuesto;

    /**
     * this. se refiere a la instancia actual de la clase, 
     * y es una propiedad de la instancia que almacena el nombre del cliente.

     * El guion bajo (_) es una convención común para señalar que una propiedad es interna, 
     * y no debe ser accedida o modificada directamente desde fuera de la clase.
     * Anima a usar métodos públicos (getters y setters) que pueden incluir lógica adicional para validación, 
     * transformación de datos y mas.
     */

  }

  get nombre() {
    return this._nombre;
  }

  /**
   * get nombre(): Este es un método getter. Cuando se llama a cliente.nombre, 
   * se ejecuta este método y devuelve el valor de this._nombre.
   * 6. Implementar getter y setter para acceder y/o modiﬁcar los datos de las clases. (2 Puntos) 
   */

  set nombre(value) {
    this._nombre = value;
  }

  /**
   * set nombre(value): Este es un método setter. 
   * Cuando se asigna un valor a cliente.nombre, se ejecuta este método con value como argumento. 
   * Este método establece el valor de this._nombre al valor proporcionado.
   */

  calcularImpuesto() {
    const { montoBrutoAnual, deducciones } = this._impuesto;

    /**
     * Usamos desestructuración (destructuring) para extraer las propiedades montoBrutoAnual y deducciones del objeto this._impuesto.
     * La desestructuración de objetos permite extraer propiedades de un objeto y asignarlas a variables.
     */

    return (montoBrutoAnual - deducciones) * 0.21;

    /**
     * Realizamos el cálculo del impuesto usando la fórmula proporcionada:
     * Resta las deducciones del monto bruto anual y multiplica el resultado por 0.21 (21%) para obtener el impuesto anual.
     */

  }
}

export default Cliente; // Define 'Cliente' como el valor predeterminado a exportar del módulo.