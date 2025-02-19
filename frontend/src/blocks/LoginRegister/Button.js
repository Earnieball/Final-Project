import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.bgColor ? '#91ad91' : 'transparent')};
  color: ${(props) => (props.textColor ? '#91ad91' : 'white')};
  padding: 0.5rem 2rem;
  font-size: 1rem;
  /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
  margin: 0rem;
  cursor: pointer;
  border-radius: 2rem;
  border: ${(props) => (props.border ? '1px solid #91ad91' : 'none')};
  min-width: 150px;
  font-size: 0.8rem;

  /* &:hover {
    background-color: light-grey;
  } */
`;
export default Button;
