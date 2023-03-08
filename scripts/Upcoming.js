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