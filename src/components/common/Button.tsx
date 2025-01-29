import styled from "styled-components";
import { ButtonProps } from "../../types/types";

export const Button = styled.button<ButtonProps>`
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
  margin-right: ${({ marginRight }) => (marginRight ? "8px" : "0")};

  ${({ variant }) => {
    switch (variant) {
      case "danger":
        return `
          background-color: #dc3545;
          color: white;
          &:hover { background-color: #c82333; }
        `;
      case "secondary":
        return `
          background-color: #6c757d;
          color: white;
          &:hover { background-color: #545b62; }
        `;
      default:
        return `
          background-color: #007bff;
          color: white;
          &:hover { background-color: #0056b3; }
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "small":
        return `
          padding: 4px 8px;
          font-size: 12px;
        `;
      case "large":
        return `
          padding: 12px 24px;
          font-size: 16px;
        `;
      default:
        return `
          padding: 8px 16px;
          font-size: 14px;
        `;
    }
  }}

  ${({ fullWidth }) => fullWidth && `width: 100%;`}

  @media (max-width: 640px) {
    width: 100%;
    margin-bottom: 8px;
  }
`;
