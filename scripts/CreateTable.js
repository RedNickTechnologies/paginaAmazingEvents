async function fetchApi(){
    try{
        let urlApi ="https://api-amazingevents.onrender.com/api/amazing-events";
        let fetchResponse = await fetch(urlApi);
        console.log (fetchResponse);
        let response = await fetchResponse.json(); //solo decodifica, no convierte en JSON
        defineEventsStatisticsTable (response.events.stats);

        let selector =document.getElementById("D-Table-1");
        selector.innerHTML=defineEventsStatisticsTable (response.events);

    }catch (error){
        console.log("Hubo un error en Create Table")
    }
}
fetchApi();