import React, { Component } from 'react';

class FloatingCart extends Component {

    render() {
        const {
            visible
        } = this.props;
        return (
            <div className={"fixed bottom-0 px-3 py-3 block w-full rounded-t-2xl " + (visible ? '' : 'invisible')}>
                <div className="flex items-center justify-between w-full h-16 bg-red-800 rounded-2xl text-white px-3 py-2">

                    <div>
                        <span className="flex font-bold">
                            <span>5</span>
                            <span>&nbsp;</span>
                            <span>Items</span>
                            <span>&nbsp;</span>
                            <span>|</span>
                            <span>&nbsp;</span>
                            <h2>
                                Rp. 25,000
                        </h2>
                        </span>
                        <span className="font-light">
                            Termasuk Ongkos kirim
                        </span>
                    </div>

                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 -mr-1 fill-current text-white">
                            <path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 -mr-1 fill-current text-white"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                    </div>

                </div>
            </div>
        );
    }

}

export default FloatingCart;
