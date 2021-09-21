import '../Style/search.css'

const Search = () => {
	return (
		<div>
			<div className="center">
				<div>
					<span>
						<p>Select a sensor:</p>
					</span>
				</div>
				<div className="box-input-bar">
					<input
						// value={searchQuery}
						// onInput={}
						className="input-bar"
						type="text"
						id="header-search"
						placeholder="Sensor XYZ"
						name="s"
					/>
				</div>
			</div>
		</div>
	)
}

export default Search;
