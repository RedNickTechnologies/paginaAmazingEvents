
async function captureData() {
    try{
        let urlApi ="https://api-amazingevents.onrender.com/api/amazing-events";
        let fetchResponse = await fetch(urlApi);
        //console.log (fetchResponse);
        let response = await fetchResponse.json(); //solo decodifica, no convierte en JSON
       // console.log(response)

        let texto = document.getElementById('id_search').value
        let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value)
        let filtro = response.events.filter(each => {
            return (each.name.toLowerCase().includes(texto.toLowerCase())) && (checks.length === 0 || checks.includes(each.category))
        })
        //console.log(filtro)
        //console.log(texto)
        //console.log(checks)
          if (filtro.length>0) {
            createTemplate2(filtro)
        } else {
            notFound('card-home')
          }
        
    }
    catch(error){
        console.log("fallo el metodo capture data")
    }

}

function createTemplate2(arrayFiltrado){
    let templates=[];

    for (let evento of arrayFiltrado){
        templates.push(template(evento.image, evento.name, evento.description, evento.price, evento._id));
        
    }

    let selector =document.getElementById("card-home");
    selector.innerHTML=templates.join("");

}

async function fetchApi(){
    try{
        let urlApi ="https://api-amazingevents.onrender.com/api/amazing-events";
        let fetchResponse = await fetch(urlApi);
        console.log (fetchResponse);
        let response = await fetchResponse.json(); //solo decodifica, no convierte en JSON
        console.log(response)
        //para transformar de JS/JSON = JSON.parse() y JSON.string()
        createTemplate2(response.events);
    }catch (error){
        console.log("Hubo un error")
    }
}
fetchApi();
