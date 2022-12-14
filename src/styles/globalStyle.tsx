import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    
    

    button{
      border:none;
      outline:none;
    }
  }
  #root{
    min-height:100vh;
    min-width:100vw;
  }


`;
export const AppContainer = styled.main`
  width: 90vw;
  max-width: 900px;
  margin: 0 auto;
  height: 80vh;
`;
