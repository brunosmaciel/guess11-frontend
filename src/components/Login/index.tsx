import {Button, FormLabel, Input} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import {Container, Form} from './styled';
const Login = () => {
	const navigate = useNavigate();

	return <Container>
		<Form>
			<FormLabel>Nome de usuário / Email
				<Input type='text' colorScheme={'green'} focusBorderColor='green.300'/>

			</FormLabel>
			<FormLabel>Senha
				<Input type='password' colorScheme={'green'} focusBorderColor='green.300'/>

			</FormLabel>
			<p><a>Esqueci minha senha</a></p>
			<Button
				mt={5}
				colorScheme='green'
				isLoading={false}
				type='submit'
			>
            Entrar
			</Button>
		</Form>
	</Container>;
};

export default Login;
