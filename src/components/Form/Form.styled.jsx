import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  gap: 40px;
`;

export const Label = styled.label`
  font-weight: 700;
  display: flex;
  align-items: center;

  filter: drop-shadow(0px 0px 20px #a201ff);
`;

export const Input = styled.input`
  display: block;

  font-size: 20px;
  font-weight: 700;
  margin: auto;
  color: purple;
  background-color: transparent;
  outline: 1px solid aqua;

  filter: drop-shadow(0px 0px 20px #00ffff);

  &:hover,
  &:focus {
    filter: drop-shadow(0px 0px 20px #a201ff);
  }
`;

export const Button = styled.button`
  display: block;
  margin: auto;
  font-size: 18px;
  font-weight: 700;
  color: #a201ff;

  padding: 8px;

  border: 2px solid purple;
  border-radius: 8px;

  filter: drop-shadow(0px 0px 20px #00ffff);

  &:hover,
  &:focus {
    filter: drop-shadow(0px 0px 20px #a201ff);
    color: #a201ff;
    border: 2px solid #00ffff;
  }

  animation: glow 5s ease-in-out infinite;

  @keyframes glow {
    0%,
    100% {
      color: aqua;
      text-shadow: 0 0 12px aqua, 0 0 50px aqua, 0 0 100px aqua;
    }
    10%,
    90% {
      color: #a201ff;
      text-shadow: none;
    }
  }
`;
