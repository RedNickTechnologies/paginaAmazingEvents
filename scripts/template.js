let template = (foto,titulo,descripcion,precio,id)=> {
  return `
  <div class="card" style="width: 18rem;">
    <img src="${foto}" class="card-img-top img-fit" alt="...">
    <div class="card-body">
      <h5 class="card-title">${titulo}</h5>
      <p class="card-text">${descripcion}.</p>
      <small class="text-muted fs-6"> Price$ ${precio}</small>
      <a href="./details.html?id=${id}" class="btn btn-primary">Details</a>
    </div>
  </div>
  `
}