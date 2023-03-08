function notFound (id) {
    let card =
    `<div class="card mb-3 d-flex align-content-center" style="max-width: 1000px;">
             <div class="row g-0">
              <div class="col-md-4">
                <img src="../assets/pika.jpg" class="img-fluid rounded-start img-Details" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">When your event is not here</h5>
                  <div class= "d-sm-flex justify-content-around">
                  </div>
                </div>
              </div>
            </div> 
          </div>`
          let selector =document.getElementById(id);
          selector.innerHTML=card;

}