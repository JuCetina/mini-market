import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/CartButton.scss';
import shoppingCart from '../assets/shopping_cart.svg';
import { useSelector } from 'react-redux';

const CartButton = () => {
    const state = useSelector(state => state);

    const { cart } = state.market;

    let navigate = useNavigate();
    
    let totalPrice = 0;

    cart.forEach(element => {
        totalPrice += parseInt(element.price) * parseInt(element.quantity);
    });

    let COPPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
    });

    return (
        <button className='cart-button' onClick={() => navigate(`/cart`)}>
            <img className='cart-icon' src={shoppingCart} alt="Shopping cart" />   {COPPeso.format(totalPrice)}
        </button>
    )
}

export default CartButton;
