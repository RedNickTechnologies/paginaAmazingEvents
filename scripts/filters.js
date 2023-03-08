/**
 * @captureData captura los datos del formulario y retorna un objeto
 */
function captureData() {
    let name = document.getElementById('nombre_id')
    //console.log(name)
    //console.log(name.name)
    //console.log(name.id)
    //console.log(name.value)
    let checks = document.querySelectorAll('.selectorchecks:checked') /* es una lista!!! se accede como si fuera un array */
    //console.log(checks)
    let data = {
        [name.name]: name.value,
        [checks[0].name]: []
    }
    for (let each of checks) {
        console.log(each)
        console.log(each.value)
        data[checks[0].name].push(each.value)
    }
    console.log(data)
}

const handleForm = (event) => { /* le puede poner cualquier nombre PERO VA A HACER REFERENCIA SIEMPRE AL EVENTO ASOCIADO */
    event.preventDefault()
    captureData()
}

let buttonForm = document.getElementById('form-button')
buttonForm.addEventListener(
    'click', /* tipo de evento que tiene que escuchar */
    handleForm /* funcion que se va a ejecutar cada vez que se realice el evento */
)
