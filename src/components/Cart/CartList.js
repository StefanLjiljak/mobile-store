import React, { useContext } from 'react';
import { ProductContext } from '../../context';
import CartItem from './CartItem';

const CartList = () => {
  const context = useContext(ProductContext);

  return (
    <div className="container-fluid">
      {context.cart.map((item) => (
        <CartItem key={item.id} item={item} value={context} />
      ))}
    </div>
  );
};

export default CartList;
