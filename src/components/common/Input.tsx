import React from "react";
import styled from "styled-components";

interface InputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  background-color: pink;
  color: purple;
  border: 1mm dashed pink;
  background-clip: padding-box;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: yellow;
  }
`;

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
