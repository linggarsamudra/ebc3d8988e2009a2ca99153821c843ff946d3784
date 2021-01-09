import React, { Component } from 'react';

class ModalLocation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="fixed bottom-0 bg-gray-300 bg-opacity-50 w-full h-screen">
                <div className="fixed bottom-0 px-4 py-4 bg-white w-full rounded-t-2xl h-2/3">

                    <h1 className="font-bold float-right">
                        X
                </h1>

                    <div className="flex">
                        &nbsp;
                </div>

                    <div className="flex">
                        <h1 className="flex-1 text-2xl">
                            Cek makanan yang tersedia di lokasi kamu!
                    </h1>
                    </div>

                    <div className="flex w-full mt-2">

                        <div className="relative text-gray-700 focus-within:text-gray-400 w-full">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </button>
                            </span>
                            <input type="search" className="py-2 text-sm text-white bg-gray-200 rounded-md pl-12 focus:outline-none focus:bg-white focus:text-gray-900 w-full" placeholder="Search..." autocomplete="off" />
                        </div>
                    </div>

                    {/* Row Location */}
                    <div className="flex mt-2">
                        <div className="flex">
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
                        </div>
                        <div className="px-2">
                            <span className="block text-sm font-bold">Kulina</span>
                            <span className="block font-light">
                                Jalan Simpang Ijen
                        </span>
                        </div>
                    </div>
                    {/* End Row Location */}

                    {/* Row Location */}
                    <div className="flex mt-2">
                        <div className="flex">
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
                        </div>
                        <div className="px-2">
                            <span className="block text-sm font-bold">Kulina</span>
                            <span className="block font-light">
                                Jalan Simpang Ijen
                        </span>
                        </div>
                    </div>
                    {/* End Row Location */}

                </div>
            </div>
        );
    }

}

export default ModalLocation;
