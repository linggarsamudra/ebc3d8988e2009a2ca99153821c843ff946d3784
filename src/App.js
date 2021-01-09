import React, { Component } from "react";
import ModalLocation from "./components/modal-location";
import FloatingCart from "./components/floating-cart";
import ButtonSelectLocation from "./components/button-select-location";
import DateSelector from "./components/date-selector";
import FoodCard from "./components/food-card";
import TabButton from "./components/tab-button";

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			floatingCart: false,
			modalLocation: false,
		}

	}

	render() {
		return (
			<div className="container">

				<div className="sticky top-0 bg-white">
					<ButtonSelectLocation onclick="toggleModal()" />
					<DateSelector />
				</div>
				<div className="overflow-auto max-h-screen">

					<TabButton />
					<FoodCard />
					<FoodCard />
					<FoodCard />
					<FoodCard />
					<FoodCard />
					{
						this.state.floatingCart ? <FloatingCart /> : ''
					}
					{
						this.state.modalLocation ? <ModalLocation /> : ''
					}


				</div>

			</div>
		);
	}
}

export default App;