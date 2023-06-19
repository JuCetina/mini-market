import React from 'react';
import '../css/ShoppingCart.scss';
import ShoppingCartButton from './ShoppingCartButton';
import Widget from './Widget';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
    const state = useSelector(state => state);

    const { cart } = state.market;

    const total = cart.reduce((acm, product) => acm + (product.price * product.quantity), 0);

    let totalWithCents = `${total}00`;

    let COPPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
    });

    return (
        <>
            <div className='cart-section'>
                <ShoppingCartButton />
            </div>
            <h2 className='product-title'>Shopping Cart</h2>
            <div className='product-container'>
                {cart.map((item, index) =>
                    <div key={index} className='cart-item'>
                        <p className='cart-quantity'>{item.quantity}</p>
                        <img className='cart-img' src={item.src} alt={item.name} />
                    </div>)}
            </div>
            <div className='total-container'>
                <p className='total-text'>Total: </p>
                <p className='total-text total-text_value'>{COPPeso.format(total)}</p>
            </div>

            {cart.length > 0 && <Widget amount={totalWithCents} />}

        </>
    )
}

export default ShoppingCart;
