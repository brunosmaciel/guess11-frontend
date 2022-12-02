import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;

  max-width: 60px;
  svg {
    width: 30px;
    height: fit-content;
    cursor: pointer;
  }
  h1 {
    font-size: 14px;
    width: 200%;
    overflow: visible;
    text-align: center;
    letter-spacing: 1px;
  }
`;
