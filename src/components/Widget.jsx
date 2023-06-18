import React from 'react';
import '../css/Widget.scss';
import shield from '../assets/shield.png';

const Widget = ({ amount }) => {

  let checkout = new WidgetCheckout({
    currency: 'COP',
    amountInCents: amount,
    reference: 'PQ4Z2RTTVAP3',
    publicKey: 'pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf'
  })

  const handleCheckout = () => {
    checkout.open(function (result) {
      let transaction = result.transaction
      console.log('Transaction ID: ', transaction.id)
      console.log('Transaction object: ', transaction)
    })
  }

  return (
    <button className="button-widget" onClick={handleCheckout}>
      <img className="button-icon" src={shield} alt="" />
      Paga con <span className='button-text'>Wompi</span>
    </button>
  )
}

export default Widget;
