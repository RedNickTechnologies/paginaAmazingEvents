// Template for events stats
function defineEventsStatisticsTable (stats) {
	return `
		<table class="table table-dark table-hover">
			<thead>
				<tr>
					<th>Event with the highest percentage of attendance</th>
					<th>Event with the lowest percentage of attendance</th>
					<th>Event with larger capacity</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><div class="d-flex flex-column flex-wrap"><span class="event-name">${stats.highestAttendanceEvent.name}</span><span class="event-people">${stats.highestAttendanceEvent.assistance.toLocaleString("es-AR")} people</span></div></td>
					<td><div class="d-flex flex-column"><span class="event-name">${stats.lowestAttendanceEvent.name}</span><span class="event-people">${stats.lowestAttendanceEvent.assistance.toLocaleString("es-AR")} people</span></div></td>
					<td><div class="d-flex flex-column"><span class="event-name">${stats.largerCapacityEvent.name}</span><span class="event-people">${stats.largerCapacityEvent.capacity.toLocaleString("es-AR")} people</span></div></td>
				</tr>
			</tbody>
		</table>
	`
}

function defineEventsStatsByCategory (stats) {
	let template = `
		<table class="table table-dark table-hover">
			<thead>
				<tr>
					<th>Categories</th>
					<th>Revenues</th>
					<th>Percentage of attendance</th>
				</tr>
			</thead>
			<tbody>
		`

	for (let categoryData of stats) {

		let revenue = categoryData.data.reduce((accumulator, data) => accumulator + Number(data.assistance) * Number(data.price), 0)
		let attendancePct = categoryData.data.reduce((accumulator, data) => accumulator + Number(data.assistance), 0) / categoryData.data.reduce((accumulator, data) => accumulator + Number(data.capacity), 0) * 100
			
		template += `
				<tr>
					<td>${categoryData.category}</td>
					<td>${revenue.toLocaleString("es-AR")}</td>  
					<td>${attendancePct.toFixed(2)} %</td>
				</tr>
		`
	}

		template += `
			</tbody>
		</table>
		`
	return template
}