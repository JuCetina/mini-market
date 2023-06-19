import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ProductItem.scss';
import { useSelector } from 'react-redux';

const ProductItem = ({ data }) => {
  const state = useSelector(state => state);

  const { cart } = state.market;

  let navigate = useNavigate();

  let itemInCart = cart.find(item => item.id === data.id);

  return (
    <div className={`product-item ${itemInCart ? 'product-inCart' : ''}`} onClick={() => navigate(`/products/${data.id}`)}>
      {itemInCart && <p className='product-qty'>{itemInCart.quantity}</p>}
      <img className='product-image' src={data.src} alt={data.name} />
    </div>
  )
}

export default ProductItem;
