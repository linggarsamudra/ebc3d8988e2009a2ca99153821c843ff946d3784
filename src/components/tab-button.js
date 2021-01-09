import React, { Component } from "react";

class TabButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="px-2 py-4">
                <ul className='flex'>
                    <li className='py-2 px-6 bg-gray-400 rounded-l-lg w-1/2 text-center text-white text-lg'>Lunch</li>
                    <li className='py-2 rounded-r-lg px-6 text-gray-500 bg-white w-1/2 text-center text-lg border-gray-400 border-2'>Dinner</li>
                </ul>
            </div>
        );
    }
}

export default TabButton;