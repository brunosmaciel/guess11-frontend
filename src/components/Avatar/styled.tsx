import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 60px;
  svg {
    width: 30px;
    height: fit-content;
    cursor: pointer;
  }
  h1 {
    font-size: 12px;
    word-wrap: break-all;
    text-align: center;
    letter-spacing: 1px;
  }
`;
