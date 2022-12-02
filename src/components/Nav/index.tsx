import { useAppSelector } from '../../app/store/hooks';
import { Container } from './styled';

const Nav = () => {
  const {
    isLoggedIn,
    user: { username },
  } = useAppSelector(({ persistedReducer: { auth } }) => auth);
  return (
    <>
      <Container>
        <h1>
          <a href="/">GUESS</a>{' '}
          <span>
            <a href="/">11</a>
          </span>
        </h1>
        <p>{isLoggedIn ? username : ''}</p>
      </Container>
    </>
  );
};

export default Nav;
