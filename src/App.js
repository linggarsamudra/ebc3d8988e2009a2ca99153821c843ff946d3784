import React, { Component } from "react";
import ModalLocation from "./components/modal-location";
import FloatingCart from "./components/floating-cart";
import ButtonSelectLocation from "./components/button-select-location";
import DateSelector from "./components/date-selector";
import FoodCard from "./components/food-card";
import TabButton from "./components/tab-button";
import moment from 'moment';
import 'moment/locale/id';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			floatingCart: false,
			modalLocation: false,
			strDateNow: ''
		}

	}

	componentDidMount() {
		const dateNow = moment().locale("id").format('dddd. LL');
		this.setState({
			strDateNow: dateNow
		});
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
		});
	}

	render() {
		const {
			floatingCart,
			modalLocation,
			strDateNow
		} = this.state;
		return (
			<div className="container">

				<div className="sticky top-0 bg-white">
					<ButtonSelectLocation toggleModal={this.toggleModal.bind(this)} />
					<DateSelector />
				</div>
				<div className="overflow-auto max-h-screen">

					<TabButton />

					<div className="m-auto px-4 max-w-xl md:max-w-md lg:max-w-none">
						<h2 className="font-bold">
							{strDateNow}
						</h2>
					</div>

					<div className="flex flex-wrap">
						<FoodCard toggleCart={this.toggleCart.bind(this)} />
						<FoodCard toggleCart={this.toggleCart.bind(this)} />
						<FoodCard toggleCart={this.toggleCart.bind(this)} />
						<FoodCard toggleCart={this.toggleCart.bind(this)} />
					</div>

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