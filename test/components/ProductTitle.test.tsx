import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {

  test('should display the product title', () => {

    const wrapper = renderer.create(
      <ProductTitle title='Custom Product' className='custom-class' />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();

  });

  test('should display the component with product name', () => {

    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => (<ProductTitle />)}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();

  });
});