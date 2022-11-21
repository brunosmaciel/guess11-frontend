import {FormControl} from '@chakra-ui/react';
import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  width:50%;
  padding-top:50px;
  flex-direction:column;
`;

export const Form = styled(FormControl)`
  max-width:300px;
  padding:10px;
  

  p{
    margin-top:20px;
    strong{
      text-decoration:underline;
      cursor:pointer;
    }
  }
  

`;
