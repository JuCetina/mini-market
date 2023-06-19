import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../actions/marketActions';
import shoppingCart from '../assets/shopping_cart_violet.svg';
import '../css/ShoppingCartButton.scss';
import close from '../assets/close.svg';

const ShoppingCartButton = () => {
    const state = useSelector(state => state);

    const { cart } = state.market;

    const dispatch = useDispatch();

    let totalPrice = 0;

    cart.forEach(element => {
        totalPrice += parseInt(element.price) * parseInt(element.quantity);
    });

    let COPPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
    });

    return (
        <>
            <div className='shoppingcart-container shoppingcart-total'>
                <img src={shoppingCart} alt="Shopping cart" />
                <span>{COPPeso.format(totalPrice)}</span>
            </div>
            <button className='shoppingcart-button' onClick={() => dispatch(clearCart())}>
                <img src={close} alt="Clear shopping cart" />
            </button>
        </>
    )
}

export default ShoppingCartButton;
