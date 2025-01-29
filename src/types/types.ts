import { ButtonHTMLAttributes } from "react";

export interface Author {
  id: string;
  name: string;
  email?: string;
}

export interface Book {
  id: string;
  name: string;
  author_id: string;
  pages?: number;
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger" | "secondary";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  marginRight?: boolean;
}

export interface AuthorModalProps {
  onClose: () => void;
  onSubmit: (data: Author) => void;
  author?: Author;
}
