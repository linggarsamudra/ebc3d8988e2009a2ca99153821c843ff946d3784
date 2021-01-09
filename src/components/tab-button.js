import React, { Component } from "react";

class TabButton extends Component {
    render() {
        return (
            <div className="px-2 py-4 md:flex md:justify-center">
                <ul className='flex md:w-1/2'>
                    <li className='py-2 px-6 bg-gray-500 rounded-l-lg w-1/2 text-center text-white text-lg shadow-2xl'>Lunch</li>
                    <li className='py-2 px-6 bg-white rounded-r-lg w-1/2 text-center text-lg border-gray-300 border-r-2 border-t-2 border-b-2 shadow-2xl text-gray-400'>Dinner</li>
                </ul>
            </div>
        );
    }
}

export default TabButton;