function captureData() {
    let texto = document.getElementById('id_search').value
    let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value)
    let filtro = data.events.filter(each => {
        return (each.name.includes(texto)) && (checks.length === 0 || checks.includes(each.category))
    })
    console.log(filtro)
    console.log(texto)
    console.log(checks)
    console.log(data.events)
//    if (filtro.length>0) {
//        printTemplates('#pet_container',filtro)
//    } else {
//        notFound('#pet_container')
//    }
}

function createTemplate(){
    let events= data.events;

    let templates=[];

    for (let evento of events){
        
        console.log(evento);

        templates.push(template(evento.image, evento.name, evento.description, evento.price));
        
    }
    console.log(templates)

    let selector =document.getElementById("card-home");
    selector.innerHTML=templates.join("");

}
 createTemplate();