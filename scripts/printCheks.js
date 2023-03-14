//let array_tipos=[]
let tipos = [] //tipos va a ser el array que va a tener los tipos de animal SIN repetirse
data.events.forEach(each => {
    if ( ! tipos.includes(each.category) ) {
        tipos.push(each.category)
    }    
})
console.log(tipos)

function printChecks(id_etiqueta,array_tipos) {
    let container = document.querySelector(id_etiqueta)
    array_tipos = array_tipos.map(each=> {
        return `
        <fieldset>
            <label class="contact-label" for="${each}">${each}</label>
            <input onclick="captureData()" class="class_checks contact-input" type="checkbox" value="${each}" name="tipo" id="${each}">
        </fieldset>
        `
    })
    array_tipos.push(`<input onkeyup="captureData()" id="id_search" class="contact-input" type="text" name="texto" placeholder="search">`)
    container.innerHTML = array_tipos.join("")
}
printChecks('.checks',tipos)