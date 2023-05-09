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
    color: #00ffff;
    border: 2px solid #00ffff;
  }
`;
