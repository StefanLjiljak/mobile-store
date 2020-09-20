import React, { useContext } from 'react';
import { ProductContext } from '../../context';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const context = useContext(ProductContext);

  return (
    <section>
      {context.cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList />
          <CartTotals />
        </>
      )}
    </section>
  );
};

export default Cart;
