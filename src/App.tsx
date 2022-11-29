import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './app/store/store';
import Game from './components/Game';
import Login from './components/Login';
import Main from './components/Main';
import Nav from './components/Nav';
import Register from './components/Register';
import { AppContainer, GlobalStyles } from './styles/globalStyle';
function App() {
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
