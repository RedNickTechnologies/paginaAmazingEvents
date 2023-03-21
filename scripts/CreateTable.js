async function printabla1() {
    try {
        let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events?time=past";
        let fetchResponse = await fetch(urlApi);
        let response = await fetchResponse.json();
        let events = response.events;


        let stats= events.map(each=> {
            let obj={
                name : each.name,
                percent : 100 * (each.assistance / each.capacity)
            }
            return obj
        }).sort((p1, p2) => p1.percent - p2.percent)

        console.log()

        let porcentajeAsist

        document.getElementById("D-Table-1").innerHTML=templateTable1(stats[stats.length - 1], stats[0])




    } catch (error) {
        console.log(error);
    }
}


printabla1();

async function printabla2() {
    try {
        let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events?time=upcoming";
        let fetchResponse = await fetch(urlApi);
        let response = await fetchResponse.json();
        let eventos = response.events;

        let categories = []
        console.log(eventos.forEach(each => {
            if (!categories.includes(each.category)) {
                categories.push(each.category)
            }
        }))
        // console.log(categories);

        for (let evento of eventos) {
            evento.ganancia = evento.estimate * evento.price;
            // console.log(eventos.ganancia)
        }

        let acum = []
        for (let category of categories) {
            let ganancia = 0;
            let assistotal = 0;
            let captotal = 0;

            eventoscategories = eventos.filter(evento => evento.category === category)
            eventoscategories.forEach(evento => {
                ganancia += evento.ganancia;
                assistotal += evento.estimate;
                captotal += evento.capacity;
            })
        
            let porcentaje = assistotal / captotal * 100;
            porcentaje = porcentaje.toFixed(2);

            let card = `<tr class="t-body">
                 <td class="celda1" colspan="1">${category}</td>
                 <td class="celda2" colspan="1">$${ganancia}</td>
                 <td class="celda3" colspan="1">${porcentaje}%</td>
                 </tr>`;

            acum.push(card)
        }
        document.getElementById("D-Table-2").innerHTML += acum.join("");

    } catch (error) {
        console.log(error);
    }
}

printabla2()

async function printabla3() {
    try {
        let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events?time=past";
        let fetchResponse = await fetch(urlApi);
        let response = await fetchResponse.json();
        let eventos = response.events;

        console.log(eventos);

        let categories = []
        console.log(eventos.forEach(each => {
            if (!categories.includes(each.category)) {
                categories.push(each.category)
            }
        }))
        // console.log(categories);

        for (let evento of eventos) {
            evento.ganancia = evento.assistance * evento.price;
            // console.log(eventos.ganancia)
        }

        let acum = []
        for (let category of categories) {
            let ganancia = 0;
            let assistotal = 0;
            let captotal = 0;

            eventoscategories = eventos.filter(evento => evento.category === category)
            eventoscategories.forEach(evento => {
                ganancia += evento.ganancia;
                assistotal += evento.assistance;
                captotal += evento.capacity;
            })
            // console.log(category + " => Ganancia:" + ganancia + ", Asistencia:" + assistotal + ", Capacidad:" + captotal);
            let porcentaje = assistotal / captotal * 100;
            porcentaje = porcentaje.toFixed(2);
            //console.log(porcentaje);

            let card = `<tr class="t-body">
                 <td colspan="1">${category}</td>
                 <td colspan="1">$${ganancia}</td>
                 <td colspan="1">${porcentaje}%</td>
                 </tr>`;

            acum.push(card)
        }
        document.getElementById("D-Table-3").innerHTML += acum.join("");

    } catch (error) {
        console.log(error);
    }
}

printabla3()



function templateTable1(max, min) {
    return `
    <tr>
        <td>${max.nombre} ${(max.max)}</td>
        <td>${min.nombre} ${(min.min)}</td>
        <td> capac.nombre capac.capacity </td>
    </tr>
`
}