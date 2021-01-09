import React, { Component } from "react";
import ButtonSelectLocation from "./components/button-select-location";
import DateSelector from "./components/date-selector";
import FoodCard from "./components/food-card";
import TabButton from "./components/tab-button";

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			visible: true
		}

	}

	render() {
		return (
			<div className="container">

				<div className="sticky top-0 bg-white">
					<ButtonSelectLocation />
					<DateSelector />
				</div>
				<div className="overflow-auto h-screen">

					<TabButton />
					<FoodCard />
					<FoodCard />
					<FoodCard />
					<FoodCard />
					<FoodCard />

				</div>

			</div>
		);
	}
}

export default App;