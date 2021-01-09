import React, { Component } from 'react';

class FloatingCart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            visible
        } = this.props;
        return (
            <div className={"fixed bottom-0 px-3 py-3 block w-full rounded-t-2xl " + (visible ? '' : 'invisible')}>
                <div className="w-full h-16 bg-red-800 rounded-2xl text-white px-2 py-2">

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
            </div>
        );
    }

}

export default FloatingCart;
