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
    container.innerHTML = array_tipos.join('')
}
printChecks('checks',tipos)