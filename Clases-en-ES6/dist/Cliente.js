"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Impuesto = _interopRequireDefault(require("./Impuesto.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);
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
  return _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    }

    /**
     * get nombre(): Este es un método getter. Cuando se llama a cliente.nombre, 
     * se ejecuta este método y devuelve el valor de this._nombre.
     * 6. Implementar getter y setter para acceder y/o modiﬁcar los datos de las clases. (2 Puntos) 
     */,
    set: function set(value) {
      this._nombre = value;
    }

    /**
     * set nombre(value): Este es un método setter. 
     * Cuando se asigna un valor a cliente.nombre, se ejecuta este método con value como argumento. 
     * Este método establece el valor de this._nombre al valor proporcionado.
     */
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var _this$_impuesto = this._impuesto,
        montoBrutoAnual = _this$_impuesto.montoBrutoAnual,
        deducciones = _this$_impuesto.deducciones;

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
  }]);
}();
var _default = exports["default"] = Cliente; // Define 'Cliente' como el valor predeterminado a exportar del módulo.