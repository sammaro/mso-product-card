import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('should display the product without image', () => {
    const wrapper = renderer.create(<ProductImage img="http://img.ar" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should display the product with image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
