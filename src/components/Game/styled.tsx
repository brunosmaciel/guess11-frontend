import styled from 'styled-components';
import field from '../../../public/field.svg';

export const Container = styled.div`
  margin-top:40px;
  height:100%;
  background-image:${`url(${field})`};
  background-position:center;
  background-size:contain;
  background-repeat:no-repeat;
  display:flex;
  justify-content:center;
`;
export const PlayersFlexContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  row-gap:20px;
`;
export const PlayersGrid = styled.div<{lineSize: number}>`
  display: grid;
  grid-template-columns: ${({lineSize}) => `repeat(${lineSize},1fr)`};
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 0px;
  width:fit-content;
  height:5%;
  margin-top:1.5%;
  margin-bottom:20%;
  

  img{
    width:30px;
    cursor:pointer;
  }
`;
