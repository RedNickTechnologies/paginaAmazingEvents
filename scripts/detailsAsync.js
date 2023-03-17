
//Detalles

async function fetchApi() {
  try {
    let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events";
    let fetchResponse = await fetch(urlApi);
    console.log(fetchResponse);
    let response = await fetchResponse.json(); //solo decodifica, no convierte en JSON
    console.log(response);
    let events = await response.events;
    let query = location.search;
    //para transformar de JS/JSON = JSON.parse() y JSON.string()

    console.log(query)

    let event_Param = new URLSearchParams(query)
    let id_query = event_Param.get("id")
    console.log(id_query)

    let event_ONE = events.filter(each => each.id == id_query)[0];

    console.log(event_ONE)

    let card =
      `<div class="card mb-3 d-flex align-content-center" style="max-width: 1000px;">
               <div class="row g-0">
                <div class="col-md-4">
                  <img src="${event_ONE.image}" class="img-fluid rounded-start img-Details" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${event_ONE.name}</h5>
                    <p class="card-text">Description : ${event_ONE.description}</p>
                    <div class= "d-sm-flex justify-content-around">
                    <p class="card-text">Price : ${event_ONE.price}</p>
                    <p class="card-text">Place : ${event_ONE.place}</p>
                    <p class="card-text">Category : ${event_ONE.category}</p>
                    <p class="card-text">Capacity : ${event_ONE.capacity}</p>
                    <p class="card-text">assistance : ${event_ONE.assistance}</p>
                    </div>
                  </div>
                </div>
              </div> 
            </div>`
    let selector = document.getElementById("box_details");
    selector.innerHTML = card;

  } catch (error) {
    console.log("Hubo un error en details")
  }
}
fetchApi();

