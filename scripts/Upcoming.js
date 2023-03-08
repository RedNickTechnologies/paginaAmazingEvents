function captureData() {
    let texto = document.getElementById('id_search').value
    let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value)
    let filtro = data.events.filter(each => {
        return (each.name.toLowerCase().includes(texto.toLowerCase())) && (checks.length === 0 || checks.includes(each.category))
    })
    console.log(filtro)
    console.log(texto)
    console.log(checks)
      if (filtro.length>0) {
        createTemplate2(filtro)
    } else {
        notFound('#pet_container')
      }

}

function createTemplate2(arrayFiltrado){
    let templates=[];

    for (let evento of arrayFiltrado){
        
        console.log(evento);

        templates.push(template(evento.image, evento.name, evento.description, evento.price, evento._id));
        
    }
    console.log(templates)

    let selector =document.getElementById("upcoming");
    selector.innerHTML=templates.join("");

}

function createTemplate(){
    let events= data.events;

    let templates=[];

    for (let evento of events){
        if(evento.date > data.currentDate){

            console.log(evento);
            
            templates.push(template(evento.image, evento.name, evento.description, evento.price, evento.id));
        }
        
    }
    console.log(templates)

    let selector =document.getElementById("upcoming");
    selector.innerHTML=templates.join("");

}
 createTemplate();