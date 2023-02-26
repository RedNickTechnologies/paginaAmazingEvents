let events=data.events;

let Upcoming_Events=[];

for(let event of events){
    if(event.date > data.currentDate){
        Upcoming_Events.push(event)
    }
}
createTemplate(past_Events,"upcoming");