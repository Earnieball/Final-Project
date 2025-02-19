import styled from 'styled-components/macro';
import Product from './Product';
import Container from './Container';
import Empty from './Empty';

const CartCardContainer = styled.div`
  display: flex;
  background-color: white;
  position: absolute;
  width: 250px;
  top: 50px;
  right: 0;
  padding: 10px;
  box-shadow: 2px 2px 2px #ccc;
  z-index: 1;
  flex-direction: column;
  align-items: flex-start;

  img {
    max-width: 2rem;
  }

  h3 {
    width: 100%;
    text-align: center;
  }
  && p {
    width: 100%;
    text-align: end;
  }
`;

CartCardContainer.Product = Product;
CartCardContainer.Container = Container;
CartCardContainer.Empty = Empty;

export default CartCardContainer;
