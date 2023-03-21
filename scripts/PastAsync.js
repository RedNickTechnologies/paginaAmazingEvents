/* Eventos de Past */

async function captureData() {
    try{
        let urlApi ="https://api-amazingevents.onrender.com/api/amazing-events";
        let fetchResponse = await fetch(urlApi);
        //console.log (fetchResponse);
        let response = await fetchResponse.json();
       // console.log(response)
        let currentDate= response.currentDate;

        let texto = document.getElementById('id_search').value
        let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value)
        let filtro = response.events.filter(each => {
            return (each.name.toLowerCase().includes(texto.toLowerCase())) && (checks.length === 0 || checks.includes(each.category))
        })
        //console.log(filtro)
        //console.log(texto)
        //console.log(checks)
          if (filtro.length>0) {
            createTemplate2(currentDate, filtro)
        } else {
            notFound('past')
          } 
    }
    catch(error){
        console.log("fallo el metodo capture data de past")
    }

}

function createTemplate2(currentDate, arrayFiltrado){
    let templates=[];

    for (let evento of arrayFiltrado){
        
        if(evento.date < currentDate){

       //     console.log(evento);
            
            templates.push(template(evento.image, evento.name, evento.description, evento.price, evento.id));
        }
    }
    console.log(templates)

    let selector =document.getElementById("past");
    selector.innerHTML=templates.join("");

}
async function fetchApi(){
    try{
        let urlApi ="https://api-amazingevents.onrender.com/api/amazing-events";
        let fetchResponse = await fetch(urlApi);
        console.log (fetchResponse);
        let response = await fetchResponse.json(); //solo decodifica, no convierte en JSON
        console.log(response)

        let currentDate= await response.currentDate;
        //para transformar de JS/JSON = JSON.parse() y JSON.string()
        createTemplate2(currentDate, response.events);
    }catch (error){
        console.log("Hubo un error")
    }
}
fetchApi();