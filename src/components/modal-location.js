import React, { Component } from 'react';

class ModalLocation extends Component {

    render() {
        const {
            visible,
            toggleModal
        } = this.props;
        return (

            <div className={"fixed bottom-0 bg-gray-300 bg-opacity-50 w-full h-screen " + (visible ? '' : 'invisible')} style={{ color: '#424749' }}>
                <div className="fixed bottom-0 px-4 py-4 bg-white w-full rounded-t-2xl h-2/3">

                    <h1 className="font-bold float-right" onClick={toggleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7">
                            <path d="M0 0h24v24H0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </h1>

                    <div className="flex">
                        &nbsp;
                    </div>

                    <div className="flex mt-2">
                        <h1 className="flex-1 text-2xl">
                            Cek makanan yang tersedia di lokasi kamu!
                        </h1>
                    </div>

                    <div className="flex w-full mt-2">

                        <div className="relative text-gray-700 focus-within:text-gray-400 w-full mb-2">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current" style={{ color: '#f9423a' }} ><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                </button>
                            </span>
                            <input type="text" className="py-2 text-lg bg-gray-200 rounded-md pl-12 focus:outline-none focus:bg-white focus:text-gray-900 w-full border-2 focus:border-gray-300" style={{ caretColor: '#f9423a' }} placeholder="Search..." />
                        </div>
                    </div>

                    {/* Row Location */}
                    <div className="flex mt-3">
                        <div className="flex w-10 h-10 rounded-full" style={{ backgroundColor: '#f1f1f2' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 ml-1 mt-1 fill-current" style={{ color: '#e2e4e4' }} ><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
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
                    <div className="flex mt-3">
                        <div className="flex w-10 h-10 rounded-full" style={{ backgroundColor: '#f1f1f2' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 ml-1 mt-1 fill-current" style={{ color: '#e2e4e4' }} ><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
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
                    <div className="flex mt-3">
                        <div className="flex w-10 h-10 rounded-full" style={{ backgroundColor: '#f1f1f2' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 ml-1 mt-1 fill-current" style={{ color: '#e2e4e4' }} ><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
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
            </div >
        );
    }

}

export default ModalLocation;
