import LoginRegister from 'blocks/LoginRegister';
import { Wrapper } from 'elements/Wrapper';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Background } from 'elements/Background';
import Grid from 'blocks/Grid';
import { useNavigate } from 'react-router-dom';
import Footer from 'components/Footer';
import FormContainer from 'blocks/LoginRegister/FormContainer';
import Navbar from '../Navbar';

import Form from '../Form';

const Register = () => {
  const errorMessage = useSelector((store) => store.user.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    if (user?.accessToken) {
      navigate('/posters');
    }
  }, [user?.accessToken, dispatch, navigate]);
  return (
    <>
      <Navbar shadow />
      <Background padding="10rem">
        <Wrapper center bgColor="white">
          <Grid align="center" boxShadow>
            <Grid.Cell align="center" width={1 / 2}>
              <LoginRegister>
                <FormContainer>
                  <h1>Register!</h1>
                  <div>
                    <Form mode="Register" />
                  </div>
                </FormContainer>
              </LoginRegister>
            </Grid.Cell>
            <Grid.Cell width={1 / 2} justify="center" align="center">
              <img src="logo.svg" alt="logo" width="200" />
            </Grid.Cell>
          </Grid>
          <p>{errorMessage}</p>
        </Wrapper>
      </Background>
      <Footer />
    </>
  );
};
export default Register;
