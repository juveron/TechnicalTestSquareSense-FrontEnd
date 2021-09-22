import '../Style/sensorReport.css'

const SensorReport = (totalOccupancy, sensorName) => {
	totalOccupancy = 5
	sensorName = 'YXZ'
	return (
		<div className='box-body-sensor-report'>
			<div>
				<span className='box-text-sensor-report'>
					<p className='text-sensor-report'>
						Sensor {sensorName} reports room occupancy of {totalOccupancy} people
					</p>
				</span>
			</div>
		</div>
	)
}

export default SensorReport;
