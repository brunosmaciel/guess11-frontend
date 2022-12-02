import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Box, Button, FormLabel, Input, useToast } from '@chakra-ui/react';

type SignInData = {
  email: string;
  password: string;
};
import { useAppDispatch } from '../../app/store/hooks';
import { fetchData } from './authSlice';
import { Container, Form } from './styled';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { register, handleSubmit } = useForm<SignInData>();
  async function handleSignIn({ email, password }: SignInData) {
    const { payload } = await dispatch(fetchData({ email, password }));

    payload === 404
      ? toast({
          isClosable: true,
          title: 'Email ou senha invalido',
          status: 'error',
        })
      : navigate('/game');
  }
  return (
    <Container>
      <form action="/" onSubmit={handleSubmit(handleSignIn)}>
        <Form>
          <FormLabel>
            Nome de usuário / Email
            <Input
              type="text"
              colorScheme={'green'}
              focusBorderColor="green.300"
              {...register('email')}
            />
          </FormLabel>
          <FormLabel>
            Senha
            <Input
              type="password"
              colorScheme={'green'}
              focusBorderColor="green.300"
              {...register('password')}
            />
          </FormLabel>
          <p>
            <a>Esqueci minha senha</a>
          </p>
          <Button mt={5} colorScheme="green" isLoading={false} type="submit">
            Entrar
          </Button>
        </Form>
      </form>
    </Container>
  );
};

export default Login;
