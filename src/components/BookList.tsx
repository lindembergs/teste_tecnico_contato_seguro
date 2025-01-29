import React, { useState } from "react";
import { useData } from "../context/DataContext";
import { BookModal } from "../components/modals/BookModal";
import { Book } from "../types/types";
import { Table, Button } from "../styles/CommonStyles";
import styled from "styled-components";

const ActionButton = styled(Button)`
  margin: 0 4px;
`;

const ConfirmDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const BookList: React.FC = () => {
  const { books, authors, addBook, removeBook, getAuthor } = useData();
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | undefined>();
  const [bookToDelete, setBookToDelete] = useState<Book | undefined>();

  const handleView = (book: Book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleDelete = (book: Book) => {
    setBookToDelete(book);
  };

  const confirmDelete = () => {
    if (bookToDelete) {
      removeBook(bookToDelete.id);
      setBookToDelete(undefined);
    }
  };

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Add Book</Button>

      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            const author = getAuthor(book.author_id);
            return (
              <tr key={book.id}>
                <td>{book.name}</td>
                <td>{author?.name || "Unknown Author"}</td>
                <td>{book.pages || "N/A"}</td>
                <td>
                  <ActionButton onClick={() => handleView(book)}>
                    View
                  </ActionButton>
                  <ActionButton
                    className="danger"
                    onClick={() => handleDelete(book)}
                  >
                    Delete
                  </ActionButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {showModal && (
        <BookModal
          onClose={() => {
            setShowModal(false);
            setSelectedBook(undefined);
          }}
          onSubmit={addBook}
          book={selectedBook}
          authors={authors}
        />
      )}

      {bookToDelete && (
        <>
          <Overlay />
          <ConfirmDialog>
            <p>Are you sure you want to delete {bookToDelete.name}?</p>
            <Button className="danger" onClick={confirmDelete}>
              Delete
            </Button>
            <Button onClick={() => setBookToDelete(undefined)}>Cancel</Button>
          </ConfirmDialog>
        </>
      )}
    </div>
  );
};
