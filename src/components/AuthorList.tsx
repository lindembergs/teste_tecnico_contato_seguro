import React, { useState } from "react";
import { useData } from "../context/DataContext";
import { AuthorModal } from "../components/modals/AuthorModal";
import { Author } from "../types/types";
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

export const AuthorList: React.FC = () => {
  const { authors, books, addAuthor, removeAuthor } = useData();
  const [showModal, setShowModal] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState<Author | undefined>();
  const [authorToDelete, setAuthorToDelete] = useState<Author | undefined>();

  const handleDelete = (author: Author) => {
    const authorBooks = books.filter((book) => book.author_id === author.id);
    if (authorBooks.length > 0) {
      if (
        window.confirm(
          `Esse autor possui ${authorBooks.length} livro(s). Excluir esse autor também excluirá seus livros. Tem certeza?`
        )
      ) {
        removeAuthor(author.id);
      }
    } else {
      setAuthorToDelete(author);
    }
  };

  const confirmDelete = () => {
    if (authorToDelete) {
      removeAuthor(authorToDelete.id);
      setAuthorToDelete(undefined);
    }
  };

  const handleView = (author: Author) => {
    setSelectedAuthor(author);
    setShowModal(true);
  };

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Adicionar autor</Button>

      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Quantidade de livros</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td>{author.name}</td>
              <td>{author.email || "N/A"}</td>
              <td>
                {books.filter((book) => book.author_id === author.id).length}
              </td>
              <td>
                <ActionButton onClick={() => handleView(author)}>
                  Ver ou editar
                </ActionButton>
                <ActionButton
                  className="danger"
                  onClick={() => handleDelete(author)}
                >
                  Excluir
                </ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {showModal && (
        <AuthorModal
          onClose={() => {
            setShowModal(false);
            setSelectedAuthor(undefined);
          }}
          onSubmit={addAuthor}
          author={selectedAuthor}
        />
      )}

      {authorToDelete && (
        <>
          <Overlay />
          <ConfirmDialog>
            <p>Tem certeza que deseja excluir o autor {authorToDelete.name}?</p>
            <Button className="danger" onClick={confirmDelete}>
              Excluir
            </Button>
            <Button onClick={() => setAuthorToDelete(undefined)}>
              Cancelar
            </Button>
          </ConfirmDialog>
        </>
      )}
    </div>
  );
};
