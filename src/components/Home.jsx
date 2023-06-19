import React from 'react'
import CartButton from './CartButton';
import '../css/Home.scss';

const Home = () => {

    return (
        <>
            <div className='cart-section'>
                <CartButton />
            </div>
            <div className='home-container'>
                <p className='home-description'>Please choose a product.</p>
            </div>
        </>
    )
}

export default Home;
