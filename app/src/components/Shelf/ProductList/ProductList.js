import React from 'react';

import Product from './Product';

export const ProductList = ({ products }) => {
  return products.map(p => {
    return <Product product={p} key={p.id} />;
  });
};
