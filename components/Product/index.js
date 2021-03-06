import React from 'react';
import {
  Container,
  ContainerColumn,
  ProductContainer,
} from './index.styled';
import ProductGallery from 'components/ProductGallery';
import ProductFeatures from 'components/ProductFeatures';
import ProductPrice from 'components/ProductPrice';
import CollapsableTab from 'components/CollapsableTab';

const testDataProduct = {
  itemCode: 'ST2012',
  customBrand: 'Studio',
  detailedColor: 'Rojo',
  // uColor: 'blue',
  length: 30,
  height: 30,
  width: 30,
  volume: 30,
  weight: 30,
  depth: 30,
  seatHeight: 30,
  chairBackHeight: 30,
  armRestHeight: 30,
  lengthUnitMsr: 'cm',
  heightUnitMsr: 'cm',
  widthUnitMsr: 'cm',
  weightUnitMsr: 'cm',
  volumeUnitMsr: 'cm',
  seatHeightUnitMsr: 'cm',
  depthUnitMsr: 'cm',
  armRestHeightUnitMsr: 'cm',
  chairBackHeightUnitMsr: 'cm',
  // pricecomponent
  available: 0,
  availableDates: [
    '20/mar/2020',
    '24/mar/2020',
    '28/mar/2020',
  ],
  priceBefore: 20000,
  price: 1000,
};
const testMainPromo = {
  discountPg1: 20,
};
const Product = () => (
  <Container>
    <ProductContainer>
      <ContainerColumn right>
        <ProductGallery />
      </ContainerColumn>
      <ContainerColumn>
        <ProductFeatures product={testDataProduct} filter={[]} />
        <ProductPrice product={testDataProduct} mainPromo={testMainPromo} />
      </ContainerColumn>
    </ProductContainer>
    <CollapsableTab title="DETALLES DEL ARTÍCULO" content={'<p><strong>hi</strong/></p>'} />
    <CollapsableTab title="FORMAS DE PAGO" content={'<p><strong>hi</strong/></p>'} />
    <CollapsableTab title="DETALLES DE LA ENTREGA" content={'<p><strong>hi</strong/></p>'} />
  </Container>
);

export default Product;
