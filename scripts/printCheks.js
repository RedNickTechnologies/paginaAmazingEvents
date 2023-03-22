
async function captureCheks() {
    let tipos = [] //tipos va a ser el array que va a tener los tipos de animal SIN repetirse
    let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events";
    let fetchResponse = await fetch(urlApi);

    let response = await fetchResponse.json(); //solo decodifica, no convierte en JSON

    response.events.forEach(each => {
        if (!tipos.includes(each.category)) {
            tipos.push(each.category)
        }
    })
  
    printChecks(tipos);
}


function printChecks(array_tipos) {
    let container = document.querySelector('.checks')
    array_tipos = array_tipos.map(each => {
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

captureCheks();