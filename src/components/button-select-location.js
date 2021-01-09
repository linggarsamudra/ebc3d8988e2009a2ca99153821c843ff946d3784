import React, { Component } from "react";

class ButtonSelectLocation extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const {
            toggleModal
        } = this.props;
        return (

            <div className="flex py-2">
                <span className="-mt-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-12 h-12 ml-2"
                    >
                        <path
                            className="fill-current"
                            d="M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z"
                        />
                    </svg>
                </span>
                <div className="px-2" onClick={toggleModal}>
                    <span className="block uppercase text-sm font-light">Alamat Pengantaran</span>
                    <span className="block font-bold">
                        Tokopedia Tower
                    </span>
                </div>
            </div>
        );
    }

}

export default ButtonSelectLocation;