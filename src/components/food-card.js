import React, { Component } from "react";

class FoodCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <div className="m-auto px-4 py-4 max-w-xl">
                    <div className="bg-white shadow-2xl">

                        <div>
                            <img src="https://source.unsplash.com/random/500x250" alt="Food" />
                        </div>

                        <div className="px-4 py-4 mt-2 bg-white">

                            <div className="flex">
                                <span className="text-2xl text-gray-600">4.5</span>
                                <div className="flex items-center mt-2 mb-4">
                                    <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg className="mx-1 w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                </div>
                            </div>

                            <h2 className="text-gray-700 font-bold text-2xl">
                                Roasted Chicken with Scramble Egg
						  </h2>

                            <span className="text-sm text-gray-500">by Kulina </span>
                            <span className="text-sm text-gray-500">Uptown Lunch</span>

                            <div className="flex items-center justify-between">
                                <div className="text-lg text-gray-600">
                                    Rp. 75,000
							</div>
                                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg">
                                    Add
							</button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default FoodCard;