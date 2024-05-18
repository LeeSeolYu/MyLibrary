import React from "react";
import styled from "styled-components";

interface TextareaProps {
  name: string;
  id: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const StyledTextarea = styled.textarea`
  resize: none;
  background-color: pink;
  color: purple;
  border: 1mm dashed pink;
  background-clip: padding-box;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: yellow;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: orange;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: pink;
  }

  scrollbar-color: purple pink;
  scrollbar-width: thin;
`;

const Textarea: React.FC<TextareaProps> = ({
  name,
  id,
  required,
  onChange,
  value,
}) => {
  return (
    <StyledTextarea
      name={name}
      id={id}
      required={required}
      onChange={onChange}
      value={value}
    />
  );
};

export default Textarea;
