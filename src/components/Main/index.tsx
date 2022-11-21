import {Button} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import ball from '../../../public/ball.svg';
import {Ball, Form} from './styled';

const Main = () => {
	const navigate = useNavigate();

	return <>
		<Ball>
			<img src={ball} alt='ball' />
		</Ball>
		<Form action='/'>
			<Button colorScheme='green' width={'200px'} onClick={() => {
				navigate('/login');
			}}>Entrar</Button>
			<Button colorScheme={'green'} variant='outline' margin={'20px'} onClick={() => {
				navigate('/game');
			}}>Jogar como convidado</Button>

			<span>Nao tem uma conta? <strong onClick={() => {
				navigate('/register');
			}}>Registre-se</strong></span>
		</Form>
	</>;
};

export default Main;
