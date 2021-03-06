import React, { Component } from 'react';
import Link from 'next/link';
import {
  Carousel as Flickity,
  Container,
  CircleContainer,
  Circle,
  Title,
  MobileButton,
} from './index.styled';

import ProductCard from 'components/Card';

class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        arrowShape: {
          x0: 5,
          x1: 60,
          y1: 50,
          x2: 70,
          y2: 40,
          x3: 30,
        },
        wrapAround: true,
        lazyLoad: 1,
        groupCells: 1,
      },
    };
  }

  render() {
    const { config } = this.state;
    const { collectionTitle, collectionLink, products } = this.props;
    return (
      <div>
        <Title><span>{collectionTitle || 'Sin título'}</span></Title>
        <Container>
          <Flickity
            disableImagesLoaded={false}
            reloadOnUpdate
            options={config}
          >
            {products.map((product, i) => <ProductCard key={i} {...product} />)}
          </Flickity>
          <CircleContainer>
            <Link href="/category/[pid]" as={`/category/${collectionLink}`} passHref>
              <Circle>
                <p>
                  VER
                  CATEGORÍA
                  <br />
                  <strong>COMPLETA</strong>
                </p>
              </Circle>
            </Link>
          </CircleContainer>
        </Container>
        <Link href="/category/[pid]" as={`/category/${collectionLink}`} passHref>
          <MobileButton>VER MÁS PRODUCTOS</MobileButton>
        </Link>
      </div>
    );
  }
}


export default ProductSlider;
