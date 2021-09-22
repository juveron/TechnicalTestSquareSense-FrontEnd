import '../Style/search.css'
import {ButtonGroup, Dropdown} from "react-bootstrap";
import {useState} from "react";

const Search = () => {
	let test1 = '1'
	let test2 = '2'
	let test3 = '3'


	const [sensorName, setSensorName] = useState('Sensor XYZ');
	return (
		<div className="body">
			<div className="center">
				<div className="box-text">
					<span>
						<p className="text">Select a sensor:</p>
					</span>
				</div>
				<div className="box-input-bar">
					{/*<input*/}
					{/*	// value={searchQuery}*/}
					{/*	// onInput={}*/}
					{/*	className="input-bar"*/}
					{/*	type="text"*/}
					{/*	id="header-search"*/}
					{/*	placeholder="Sensor XYZ"*/}
					{/*	name="s"*/}
					{/*/>*/}
					<Dropdown as={ButtonGroup}>
						<span className="test-div-box">
							<p className="test-text">{sensorName}</p></span>
						<Dropdown.Toggle className="test-toogle" split variant="success" id="dropdown-split-basic" />

						<Dropdown.Menu>
							<Dropdown.Item className="test" as="Button" onClick={() => setSensorName(test1)}><p className="test-text-toogle">{test1}</p></Dropdown.Item>
							<Dropdown.Item className="test" as="Button" onClick={() => setSensorName(test2)}><p className="test-text-toogle">{test2}</p></Dropdown.Item>
							<Dropdown.Item className="test" as="Button" onClick={() => setSensorName(test3)}><p className="test-text-toogle">{test3}</p></Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</div>
	)
}

export default Search;
