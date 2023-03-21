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

        let porcentajeAsist

        document.getElementById("D-Table-1").innerHTML=templateTable1(stats[stats.length - 1], stats[0], )




    } catch (error) {
        console.log(error);
    }
}


printabla1();


function templateTable1(max, min, capac) {
    return `
    <tr>
        <td>${max.nombre} ${parceInt(max.max)}</td>
        <td>${min.nombre} ${parceInt(min.min)}</td>
        <td>${capac.nombre} ${capac.capacity}</td>
    </tr>
`
}