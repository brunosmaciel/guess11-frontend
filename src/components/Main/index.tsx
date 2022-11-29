import { useNavigate } from 'react-router-dom';

import { Button } from '@chakra-ui/react';

import ball from '../../../public/ball.svg';
import { useAppDispatch } from '../../app/store/hooks';
import { startGame } from '../Game/scoreSlice';
import { Ball, Form } from './styled';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <>
      <Ball>
        <img src={ball} alt="ball" />
      </Ball>
      <Form action="/">
        <Button
          colorScheme="green"
          width={'200px'}
          onClick={() => {
            navigate('/login');
          }}
        >
          Entrar
        </Button>
        <Button
          colorScheme={'green'}
          variant="outline"
          margin={'20px'}
          onClick={() => {
            navigate('/game');
            dispatch(startGame());
          }}
        >
          Jogar como convidado1
        </Button>

        <span>
          Nao tem uma conta?{' '}
          <strong
            onClick={() => {
              navigate('/register');
            }}
          >
            Registre-se
          </strong>
        </span>
      </Form>
    </>
  );
};

export default Main;
