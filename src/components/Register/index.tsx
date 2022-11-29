import { useNavigate } from 'react-router-dom';

import { Button, FormLabel, Input } from '@chakra-ui/react';

import { Container, Form } from './styled';
const Register = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Form>
        <FormLabel>
          Nome de usuário
          <Input
            type="text"
            colorScheme={'green'}
            focusBorderColor="green.300"
          />
        </FormLabel>
        <FormLabel>
          Email
          <Input
            type="text"
            colorScheme={'green'}
            focusBorderColor="green.300"
          />
        </FormLabel>
        <FormLabel>
          Senha
          <Input
            type="password"
            colorScheme={'green'}
            focusBorderColor="green.300"
          />
        </FormLabel>
        <FormLabel>
          Confirme sua senha
          <Input
            type="password"
            colorScheme={'green'}
            focusBorderColor="green.300"
          />
        </FormLabel>
        <Button mt={5} colorScheme="green" isLoading={false} type="submit">
          Criar conta
        </Button>
        <p>
          Ja tem uma conta?{' '}
          <strong
            onClick={() => {
              navigate('/login');
            }}
          >
            Faça Login
          </strong>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
