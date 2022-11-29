import styled from 'styled-components';
export const Ball = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  img {
    width: 100px;
    height: 100px;
    animation: bounce-top 0.9s both;
  }
  @keyframes bounce-top {
    0% {
      transform: translateY(-45px);
      animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    40% {
      transform: translateY(-24px);
      animation-timing-function: ease-in;
    }
    65% {
      transform: translateY(-12px);
      animation-timing-function: ease-in;
    }
    82% {
      transform: translateY(-6px);
      animation-timing-function: ease-in;
    }
    93% {
      transform: translateY(-4px);
      animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
      opacity: 1;
    }
  }
`;
export const Form = styled.form`
  font-family: 'Oxygen', sans-serif;
  display: flex;
  height: 45vh;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  margin-top: 120px;

  strong {
    text-decoration: underline;
    cursor: pointer;
  }
`;
