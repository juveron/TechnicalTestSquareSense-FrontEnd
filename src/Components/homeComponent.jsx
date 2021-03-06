import { useState } from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import '../Style/occupancyButton.css'
import '../Style/sensorReport.css'
import '../Style/search.css'
import '../Style/title.css'
import '../Style/homeComponent.css'
import axios from "axios";
import Triangle from "./icon/triangle";

 const HomeComponent = () => {
	const [displayReportResult, setDisplayReportResult] = useState(false);
	const [errorDisplay, setErrorDisplay] = useState('' || null);
	const [sensorName, setSensorName] = useState('Sensor XYZ');
	const [items, setItems] = useState([]);

	const query = '?sensor='
	const request = 'http://localhost:8080/api/occupancy'
	const room = ['room1', 'room2', 'room3']
	const roomSelected = (sensorName === room[0]) ? room[0] : (sensorName === room[1]) ? room[1] : (sensorName === room[2]) ? room[2] : 0

	const getTotalOfPeople = () => {
		if (sensorName === 'Sensor XYZ')
			setErrorDisplay('Please select a room to see the sensor reports room');
		else setErrorDisplay(null);
		setDisplayReportResult(true)
		axios
			.get(`${request}${query}${roomSelected}`)
			.then(response => {
				setItems([response.data.inside]);
				console.log(response.data.inside);
			})
			.catch(error => console.log(error));
	}
	return (
		<div className='body'>
			<div className="box-title">
				<div style={{textAlign: 'center'}}>
					<h3 className="title">
						Meeting room occupancy
					</h3>
				</div>
			</div>
			<div className='box-body-search'>
				<div className="center">
					<div className="box-text">
						<p className="text">Select a sensor:</p>
					</div>
					<div className="box-input-bar">
						<Dropdown as={ButtonGroup}>
							<div className="test-div-box">
								<p className="test-text">{sensorName}</p>
							</div>
							<Dropdown.Toggle className="test-toogle" split variant="success" id="dropdown-split-basic">
								<Triangle />
							</Dropdown.Toggle>

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
				<div className="box-box-button">
					<button className="button" onClick={getTotalOfPeople}>
						<p className="text-button">Show occupancy</p>
					</button>
				</div>
			</div>
			<div className='box-body-sensor-report'>
				<div className='box-text-sensor-report'>
					{(sensorName === 'Sensor XYZ' && displayReportResult ?
						<p className='text-sensor-report'>
						{errorDisplay}
					</p> : displayReportResult ?
					<p className='text-sensor-report'>Sensor {sensorName} reports room occupancy of {items.map((item) => (item))} people</p> : null)}
				</div>
			</div>
		</div>
	)
}

export default HomeComponent;
