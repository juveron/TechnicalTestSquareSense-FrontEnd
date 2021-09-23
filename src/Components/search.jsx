// import '../Style/search.css'
// import { ButtonGroup, Dropdown } from "react-bootstrap";
// import { useState } from "react";
// import useFetch from "react-fetch-hook";
//
// const Search = ({room1, room2, room3}) => {
//
//
// 	console.log(room1);
// 	room1 = 'room1'
// 	room2 = 'room2'
// 	room3 = 'room3'
//
// 	const [sensorName, setSensorName] = useState('Sensor XYZ');
// 	return (
// 		<div className="body">
// 			<div className="center">
// 				<div className="box-text">
// 					<span>
// 						<p className="text">Select a sensor:</p>
// 					</span>
// 				</div>
// 				<div className="box-input-bar">
// 					<Dropdown as={ButtonGroup}>
// 						<span className="test-div-box">
// 							<p className="test-text">{sensorName}</p></span>
// 						<Dropdown.Toggle className="test-toogle" split variant="success" id="dropdown-split-basic" />
//
// 						<Dropdown.Menu>
// 							<Dropdown.Item className="test" as="Button" onClick={() => setSensorName(room1)}><p className="test-text-toogle">{room1}</p></Dropdown.Item>
// 							<Dropdown.Item className="test" as="Button" onClick={() => setSensorName(room2)}><p className="test-text-toogle">{room2}</p></Dropdown.Item>
// 							<Dropdown.Item className="test" as="Button" onClick={() => setSensorName(room3)}><p className="test-text-toogle">{room3}</p></Dropdown.Item>
// 						</Dropdown.Menu>
// 					</Dropdown>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
//
// export default Search;
