import OccupancyButton from "../Components/occupancyButton";
import SensorReport from "../Components/sensorReport";
import Search from "../Components/search";
import Title from "../Components/title";

const Home = () => {
	return (
		<div>
			<Title />
			<Search />
			<OccupancyButton />
			<SensorReport />
		</div>
	)
}

export default Home;
