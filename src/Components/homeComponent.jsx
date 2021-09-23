import Title from "./title";
import useFetch from "react-fetch-hook"
import { useState } from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import '../Style/occupancyButton.css'
import '../Style/sensorReport.css'
import '../Style/search.css'
import '../Style/title.css'


const HomeComponent = () => {
	const [displayReportResult, setDisplayReportResult] = useState (false);
	const [sensorName, setSensorName] = useState('Sensor XYZ');
	const [item, setItem] = useState()
	const query = '?sensor='
	const request = 'http://localhost:8080/api/occupancy'
	const room = ['room1', 'room2', 'room3']
	const roomSelected = (sensorName === room[0]) ? room[0] : (sensorName === room[1]) ? room[1] : (sensorName === room[2]) ? room[2] : room[0]
	const sensor = useFetch(`${request}${query}${roomSelected}`);
	const DisplayOccupancy = () => {
		setItem(sensor)
		setDisplayReportResult(true)
	}
	return (
		<div>
			<div className="box-title">
				<h3 className="title">
					Meeting room occupancy
				</h3>
			</div>
			<div className="body">
				<div className="center">
					<div className="box-text">
					<span>
						<p className="text">Select a sensor:</p>
					</span>
					</div>
					<div className="box-input-bar">
						<Dropdown as={ButtonGroup}>
						<span className="test-div-box">
							<p className="test-text">{sensorName}</p></span>
							<Dropdown.Toggle className="test-toogle" split variant="success" id="dropdown-split-basic" />

							<Dropdown.Menu>
								<Dropdown.Item
									className="test"
									as={Button}
									onClick={() => setSensorName(room[0])}
								>
									<p className="test-text-toogle">room1</p>
								</Dropdown.Item>
								<Dropdown.Item
									className="test"
									as={Button}
									onClick={() => setSensorName(room[1])}
								>
									<p className="test-text-toogle">room2</p>
								</Dropdown.Item>
								<Dropdown.Item
									className="test"
									as={Button}
									onClick={() => setSensorName(room[2])}
								>
									<p className="test-text-toogle">room3</p></Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
			</div>
			<div className="box-body-button">
				<div>
					<button className="button" onClick={DisplayOccupancy}>
						<p className="text-button">Show occupancy</p>
					</button>
				</div>
			</div>
			{(displayReportResult ?
			<div className='box-body-sensor-report'>
				<div>
				<span className='box-text-sensor-report'>
					<p className='text-sensor-report'>
						Sensor {sensorName} reports room occupancy of {item.data.inside} people
					</p>
				</span>
				</div>
			</div> : null)}
		</div>
	)
}

export default HomeComponent;
