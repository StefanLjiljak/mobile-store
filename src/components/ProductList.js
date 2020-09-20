import React, { useContext } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductContext } from '../context';

const ProductList = () => {
  const context = useContext(ProductContext);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {context.products.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
