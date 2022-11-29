import { Container } from './styled';

const Nav = () => {
  const isLoggedIn = false;
  const user = 'Bruno';
  return (
    <>
      <Container>
        <h1>
          <a href="/">GUESS</a>{' '}
          <span>
            <a href="/">11</a>
          </span>
        </h1>
        <p>{isLoggedIn ? user : ''}</p>
      </Container>
    </>
  );
};

export default Nav;
