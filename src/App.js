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

	toggleModal() {
		const {
			floatingCart,
			modalLocation
		} = this.state;
		if (floatingCart) {
			this.setState({
				floatingCart: !floatingCart
			});
		}
		this.setState({
			modalLocation: !modalLocation
		})
	}

	toggleCart() {
		console.log('toggleCart', this.state);
		const {
			modalLocation
		} = this.state;
		if (modalLocation) {
			this.setState({
				modalLocation: !modalLocation
			})
		}
		this.setState({
			floatingCart: true
		}, () => {
			console.log(this.state.floatingCart);
		});
	}

	render() {
		const {
			floatingCart,
			modalLocation
		} = this.state;
		return (
			<div className="container">

				<div className="sticky top-0 bg-white">
					<ButtonSelectLocation toggleModal={this.toggleModal.bind(this)} />
					<DateSelector />
				</div>
				<div className="overflow-auto max-h-screen">

					<TabButton />

					<FoodCard toggleCart={this.toggleCart.bind(this)} />

					<FloatingCart visible={floatingCart} />

					<ModalLocation
						visible={modalLocation}
						toggleModal={this.toggleModal.bind(this)}
					/>


				</div>

			</div>
		);
	}
}

export default App;