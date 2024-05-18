import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType<any>;
  to?: string;
  Emoji?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: pink;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  position: relative;

  &:after {
    content: ${(props) => (props.Emoji ? '"😊"' : '""')};
    position: absolute;
    right: -15px;
    top: 3px;
    transform: translateY(-50%);
    font-size: 24px;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, as, to, ...props }) => {
  if (as) {
    return React.createElement(as, { to, ...props }, children);
  }

  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
