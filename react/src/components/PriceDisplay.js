import React from 'react';

class SearchBar extends React.Component {

    render() {
        const {subTotal, deliveryFee} = this.props;
        const taxes = (Math.round((subTotal * 0.05) * 100) / 100).toFixed(2);
        const total =  (Math.round((parseFloat(subTotal) + deliveryFee + parseFloat(taxes))* 100) / 100).toFixed(2);

        return (
            <div>
                <div><p>Subtotal: {subTotal}</p></div>
                <div><p>Delivery Fee: {deliveryFee}</p></div>
                <div><p>Taxes: {taxes}</p></div>
                <div><p>Total: {total}</p></div>
            </div>
        )
    }
}

export default SearchBar;