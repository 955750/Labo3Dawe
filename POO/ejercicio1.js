class Punto {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    suma(p) {
        let sumaX = this.x + p.x
        let sumaY = this.y + p.y
        return new Punto(sumaX, sumaY)
    }
}

console.log(new Punto(1, 2).suma(new Punto(2, 1)))