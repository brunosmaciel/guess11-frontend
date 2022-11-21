import {FormControl} from '@chakra-ui/react';
import styled from 'styled-components';

export const Container = styled.div`


  display:flex;
  justify-content:center;
  width:50%;
  padding-top:50px;

  
`;

export const Form = styled(FormControl)`
  max-width:300px;
  padding:10px;
  

  p{
    text-align:right;
    width:90%;
     a{
      font-size:14px;
      font-style:italic;
      cursor:pointer;
     }
  }
  

`;
