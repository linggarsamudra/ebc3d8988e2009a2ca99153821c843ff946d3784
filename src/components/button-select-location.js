import React, { Component } from "react";

class ButtonSelectLocation extends Component {

    render() {
        const {
            toggleModal
        } = this.props;
        return (

            <div className="flex py-2">
                <span className="-mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 ml-2 mt-1">
                        <path className="fill-current" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                    </svg>
                </span>
                <div className="px-2">
                    <span className="block uppercase text-sm font-light">Alamat Pengantaran</span>
                    <div className="flex" onClick={toggleModal}>
                        <span className="block font-bold">
                            Tokopedia Tower
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 fill-current text-red-600">
                                <path d="M0 0h24v24H0z" fill="none" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        );
    }

}

export default ButtonSelectLocation;