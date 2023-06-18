import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import ShoppingCart from './ShoppingCart';
import shoppingBag from '../assets/shopping-bag.svg';
import '../css/MiniMarket.scss'
import Home from './Home';

const MiniMarket = () => {
    const state = useSelector(state => state);

    const { products, cart } = state.market;

    return (
        <HashRouter>

            <main className='market-main'>
                
                <section className='market-left'>
                    <div className='market-bag'>
                        <img className='market-bagimg' src={shoppingBag} alt="" />
                    </div>
                    <h1 className='market-title'>Store</h1>
                    <section className='market-products'>
                        {products.map(item => <ProductItem key={item.id} data={item} cart={cart} />)}
                    </section>
                </section>
                
                <section className='market-right'>
                    <Routes>
                        <Route path='/' element={<Home cart={cart} />} />
                        <Route path='/products/:idProduct' element={<ProductDetail products={products} cart={cart} />} />
                        <Route path='/cart' element={<ShoppingCart cart={cart} />} />
                    </Routes>
                </section>
            </main>
        </HashRouter>
    )
}

export default MiniMarket;
