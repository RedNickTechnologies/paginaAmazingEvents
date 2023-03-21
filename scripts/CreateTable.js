async function printabla1() {
    try {
        let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events?time=past";
        let fetchResponse = await fetch(urlApi);
        let response = await fetchResponse.json();
        let eventos = response.events;

        for (let evento of eventos) {
            evento.porcentaje = evento.assistance / evento.capacity * 100;
            evento.porcentaje = evento.porcentaje.toFixed(2);
        }


        eventos.sort((a, b) => a.porcentaje - b.porcentaje)


         let nombreMAX_ASIST = eventos[eventos.lenght - 1].name;
        console.log(nombreMAX_ASIST);

        let maxAsist = eventos(eventos.lenght - 1).porcentaje;
        console.log(maxAsist);

        let maxStats = {
            nombre : nombreMAX_ASIST,
            max  : maxAsist
        }

        let nombreMIN_ASIST = eventos[0].name;
        console.log(nombreMIN_ASIST);

        let minAsist = porcentajeEventos[0].porcentaje;
        console.log(minAsist);

        let minStats = {
            nombre : nombreMIN_ASIST,
            max  : minAsist
        }
 

        eventos.sort((a, b) => a.capacity - b.capacity);

         let nombreMAX_CAPACIDAD = [capacidadEventos.lenght - 1].name;
        console.log(nombreMAX_CAPACIDAD);

        let cantMAX_CAPACIDAD = capacidadEventos[capacidadEventos.lenght - 1].capacity;
        console.log(cantMAX_CAPACIDAD);

        let capacidadStats = {

            nombre : nombreMAX_CAPACIDAD,
            max : cantMAX_CAPACIDAD
        }
        
        let tableONE= templateTable1(maxStats, minStats, capacidadStats)

        let selector =document.getElementById("D-Table-1");
        selector.innerHTML=tableONE.join("");



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

function templateTable1(max, min, capac) {
    return `
    <tr>
        <td>${max.nombre} ${parceInt(max.max)}</td>
        <td>${min.nombre} ${parceInt(min.min)}</td>
        <td>${cap.nombre} ${capac.capacity}</td>
    </tr>
`
}