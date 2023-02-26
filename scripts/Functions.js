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