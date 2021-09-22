import Title from "./title";
import Search from "./search";
// import OccupancyButton from "./occupancyButton";
import SensorReport from "./sensorReport";
import { useState } from "react";
import '../Style/occupancyButton.css'


const HomeComponent = (totalOccupancy, sensorName) => {
	totalOccupancy = 5
	sensorName = 'YXZ'
	// const [reportResult, setReportResult] = useState(totalOccupancy ? totalOccupancy : null);
	const [displayReportResult, setDisplayReportResult] = useState (false);

	if (displayReportResult === true)
		console.log(totalOccupancy);
	return (
		<div>
			<Title />
			<Search />
			<div className="box-body-button">
				<div>
					<button className="button" onClick={() => setDisplayReportResult(true)}>
						<p className="text-button">Show occupancy</p>
					</button>
				</div>
			</div>
			{(displayReportResult ?
			<SensorReport {...sensorName} {...totalOccupancy} /> : null)}
		</div>
	)
}

export default HomeComponent;
