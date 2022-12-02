import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react';

import { useAppDispatch, useAppSelector } from './app/store/hooks';
import { persistor, store } from './app/store/store';
import Game from './components/Game';
import Login from './components/Login';
import { reset } from './components/Login/authSlice';
import Main from './components/Main';
import Nav from './components/Nav';
import Register from './components/Register';
import { AppContainer, GlobalStyles } from './styles/globalStyle';

function App() {
  const { expiresAt } = useAppSelector(({ persistedReducer: { auth } }) => auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    expiresAt < Date.now() ? dispatch(reset()) : '';
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider>
          <GlobalStyles />
          <Nav />
          <AppContainer>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/game" element={<Game />} />
              </Routes>
            </BrowserRouter>
          </AppContainer>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
