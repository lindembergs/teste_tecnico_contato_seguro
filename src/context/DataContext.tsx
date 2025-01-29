import React, { createContext, useContext, useState, useEffect } from "react";
import { Author, Book } from "../types/types";

interface DataContextType {
  authors: Author[];
  books: Book[];
  addAuthor: (author: Author) => void;
  addBook: (book: Book) => void;
  removeAuthor: (id: string) => void;
  removeBook: (id: string) => void;
  getAuthor: (id: string) => Author | undefined;
  getBook: (id: string) => Book | undefined;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Inicializa o estado com os dados do localStorage ou arrays vazios
  const [authors, setAuthors] = useState<Author[]>(() => {
    const savedAuthors = localStorage.getItem("authors");
    return savedAuthors ? JSON.parse(savedAuthors) : [];
  });

  const [books, setBooks] = useState<Book[]>(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  // Salva no localStorage sempre que houver mudanças
  useEffect(() => {
    localStorage.setItem("authors", JSON.stringify(authors));
  }, [authors]);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addAuthor = (author: Author) => {
    const newAuthors = [...authors, author];
    setAuthors(newAuthors);
    localStorage.setItem("authors", JSON.stringify(newAuthors));
  };

  const addBook = (book: Book) => {
    const newBooks = [...books, book];
    setBooks(newBooks);
    localStorage.setItem("books", JSON.stringify(newBooks));
  };

  const removeAuthor = (id: string) => {
    const updatedAuthors = authors.filter((author) => author.id !== id);
    const updatedBooks = books.filter((book) => book.author_id !== id);

    setAuthors(updatedAuthors);
    setBooks(updatedBooks);

    localStorage.setItem("authors", JSON.stringify(updatedAuthors));
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  const removeBook = (id: string) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  const getAuthor = (id: string) => {
    return authors.find((author) => author.id === id);
  };

  const getBook = (id: string) => {
    return books.find((book) => book.id === id);
  };

  return (
    <DataContext.Provider
      value={{
        authors,
        books,
        addAuthor,
        addBook,
        removeAuthor,
        removeBook,
        getAuthor,
        getBook,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
