/**
 * First question
 */
let preguntaNombre = 'cómo se llama su mascota?'
let nombre = prompt(preguntaNombre)

if (nombre.length < 3) {
    alert('minimo dos letras')
    nombre = prompt(preguntaNombre)
} else {
    alert('hola dueñ@ de '+nombre+'!')
}

/**
 * Second question
 */
let preguntaEdad = 'cuántos años tiene su mascota?'
let edad = Number(prompt(preguntaEdad))

if (isNaN(edad)) {
    alert('debe ingresar un numero')
    edad = prompt(preguntaEdad)
} else {
    if (edad>0 && edad<=5) {
        alert('usted tiene una mascota muy joven!')
    } else if (edad>5 && edad<=10) {
        alert('usted tiene una mascota adulto!')
    } else if (edad>10) {
        alert('usted tiene una mascota muy grande!')
    } else {
        alert('la edad es incorrecta')
    }
}

/**
 * Third question
 */
let preguntaCategoria = 'whats category are you want? (food fair-Museum-comicon-costume party-Music Concert- Race- Book Exchange - cinema)'
let mascota = prompt(preguntaCategoria)

if (mascota == 'perro' 
    || mascota == 'gato' 
    || mascota == 'loro' 
    || mascota == 'conejo' 
    || mascota == 'tortuga'
) {
    alert('usted tiene un '+mascota+'!')
} else {
    alert('no es una mascota valida')
    mascota = prompt(preguntaMascota)
}

console.log(nombre, edad, mascota)