let events=data.events;

let past_Events=[];

for(let event of events){
    if(event.date < data.currentDate){
        past_Events.push(event)
    }
}
createTemplate(past_Events,"past");