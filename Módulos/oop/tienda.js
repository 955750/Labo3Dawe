/***** DISCO *****/
function Disco(titulo, autor, precio, formato) {
    Producto.apply(this, [titulo, autor, precio]);
    this.formato = function() {
        console.log("Formato del disco: " + formato)
    }
}

Disco.prototype = new Producto();
Disco.prototype.constructor = Disco;


/***** LIBRO *****/
function Libro(titulo, autor, precio) {
    Producto.apply(this, [titulo, autor, precio]);
    var _paginaActual = 0;

    this.marcador = function(pagina) {
        _paginaActual = pagina;
    }

    this.pasarPagina = function() {
        _paginaActual++;
    }

    this.obtenerPagina = function() {
        console.log("Estoy en la página " + _paginaActual);
    }
}

Libro.prototype = new Producto();
Libro.prototype.constructor = Libro;


/***** PRODUCTO *****/
function Producto(titulo, autor, precio) {
    this.titulo = titulo;
    this.autor = autor;
    this.precio = precio;
}

Producto.prototype.mostrar = function() {
    var contenido = "Producto: " + this.titulo + "<br/>" + "Autor: " + this.autor + "<br/>" + "Precio: " + this.precio + "<hr/>";
    return contenido;
}

/***** CREAR LA TIENDA *****/
var libro1 = new Libro("Dublinés", "Alfonso Zapico", 18);
var libro2 = new Libro("El arte de volar", "Antonio Altarriba y Kim", 20.90);
var disco1 = new Disco("Próxima estación: Esperanza", "Manu Chao", 15, "CD");

export var tienda = [];
tienda.push(libro1, libro2, disco1);