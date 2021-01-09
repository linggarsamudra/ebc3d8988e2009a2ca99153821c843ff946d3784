import React, { Component } from "react";

class FoodCard extends Component {

    render() {

        const {
            toggleCart
        } = this.props;

        return (
            <div>

                <div className="m-auto px-4 py-3 max-w-xl">
                    <div className="shadow-2xl rounded-2xl">

                        <div>
                            <img src="https://source.unsplash.com/random/500x250" alt="Food" className="rounded-t-2xl" />
                        </div>

                        <div className="px-4 py-4 mt-2 bg-white rounded-b-2xl">

                            <div className="flex">
                                <span className="text-2xl text-gray-600">4.5</span>
                                <div className="flex items-center mt-2 mb-4 ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="-mt-0.5 w-5 h-5 fill-current text-yellow-500">
                                        <g><rect fill="none" x="0" /><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" /></g>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="-mt-0.5  w-5 h-5 fill-current text-yellow-500">
                                        <g><rect fill="none" x="0" /><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" /></g>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="-mt-0.5  w-5 h-5 fill-current text-yellow-500">
                                        <g><rect fill="none" x="0" /><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" /></g>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="-mt-0.5  w-5 h-5 fill-current text-yellow-500">
                                        <g><rect fill="none" x="0" /><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" /></g>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="-mt-0.5  w-5 h-5 fill-current text-yellow-500"><g><rect fill="none" x="0" />
                                        <path d="M12,8.89L12.94,12h2.82l-2.27,1.62l0.93,3.01L12,14.79l-2.42,1.84l0.93-3.01L8.24,12h2.82L12,8.89 M12,2l-2.42,8H2 l6.17,4.41L5.83,22L12,17.31L18.18,22l-2.35-7.59L22,10h-7.58L12,2L12,2z" /></g>
                                    </svg>
                                </div>
                            </div>

                            <h2 className="text-gray-700 text-lg">
                                Roasted Chicken with Scramble Egg
						    </h2>

                            <span className="text-sm text-gray-500">by Kulina </span>
                            <span className="text-sm text-gray-500">Uptown Lunch</span>

                            <div className="flex items-center justify-between">
                                <div className="text-lg text-gray-600">
                                    Rp. 75,000
							    </div>
                                <button onClick={toggleCart} className="flex bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-lg">
                                    <span>Add</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white ml-1 mt-0.5 -mr-1 stroke-current stroke-2">
                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                    </svg>
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