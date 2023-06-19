import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/marketActions';
import '../css/ProductDetail.scss';
import CartButton from './CartButton';

const ProductDetail = () => {
    const state = useSelector(state => state);

    const { products, cart } = state.market;

    const dispatch = useDispatch();

    let { idProduct } = useParams();
    let currentProduct = products[idProduct - 1];
    let { id, name, src, price, description } = currentProduct;

    let itemInCart = cart.find(item => item.id === id);

    let COPPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
    });

    return (
        <>
            <div className='cart-section'>
                <CartButton />
            </div>

            <h2 className='product-title'>Product</h2>
            <div className='product-container'>
                <div className='product-section'>
                    <div className='product-quantity-container'>
                        {itemInCart ? <p className='product-quantity'>{itemInCart.quantity}</p> : <p className='product-quantity'>0</p>}
                    </div>
                    <div className='product-img-container'>
                        <img className='product-img' src={src} alt={name} />
                    </div>
                </div>
                <div className='product-detail'>
                    <p>
                        <span className='product-name'>{name}</span>
                        <span className='product-symbol'> · </span>
                        <span className='product-price'>{COPPeso.format(price)}</span>
                    </p>
                    <div className='buttons-container'>
                        <button className='product-button product-button_remove' disabled={!itemInCart} onClick={() => dispatch(removeFromCart(id))}>-</button>
                        <button className='product-button product-button_add' onClick={() => dispatch(addToCart(id))}>+</button>
                    </div>
                </div>
                <p className='product-description' title="description">
                    {description}
                </p>
            </div>
        </>
    )
}

export default ProductDetail;