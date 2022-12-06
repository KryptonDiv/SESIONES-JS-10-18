
class Estudiante {
    constructor() {
        this.nombre = 'Rodrigo',
            this.código = '78204952'
        this.edad = 23,
            this.nota1 = 19,
            this.nota2 = 19,
            this.nota3 = 19,
            this.nota4 = 20,
            this.prom = this.nota1 * 0.15 + this.nota2 * 0.20 + this.nota3 * 0.25 + this.nota4 * 0.40

    }
    promedio() {
        return this.prom

    }

    condicion() {

        if (this.prom >= 12) {
            return 'Alumno aprobado'
        }

        else {
            return 'Alumno desaprobado'
        }

    }

    obsequio() {
        if (this.prom >= 17) {
            return 'El estudiante ha alcanzado un promedio mayor a 17 y recibe una mochila'
        }
        else {
            return 'El promedio del estudiante no es igual o mayor a 17, por lo tanto no recibe mochila pipipipi'
        }
    }

}

let alumno = new Estudiante

console.log(alumno);
console.log(alumno.promedio());
console.log(alumno.condicion());
console.log(alumno.obsequio());







