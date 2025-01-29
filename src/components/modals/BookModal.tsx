import React from "react";
import { useForm } from "react-hook-form";
import { Book, Author } from "../../types/types";
import {
  Modal,
  ModalContent,
  Form,
  Input,
  Button,
} from "../../styles/CommonStyles";

interface BookModalProps {
  onClose: () => void;
  onSubmit: (data: Book) => void;
  book?: Book;
  authors: Author[];
}

export const BookModal: React.FC<BookModalProps> = ({
  onClose,
  onSubmit,
  book,
  authors,
}) => {
  const { register, handleSubmit } = useForm<Book>({
    defaultValues: book,
  });

  const onSubmitForm = (data: Book) => {
    onSubmit({
      ...data,
      id: book?.id || crypto.randomUUID(),
    });
    onClose();
  };

  return (
    <Modal>
      <ModalContent>
        <h2>{book ? "Editar livro" : "Adicionar livro"}</h2>
        <Form onSubmit={handleSubmit(onSubmitForm)}>
          <Input {...register("name")} placeholder="Digite o titulo" required />
          <select {...register("author_id")} required>
            <option value="">selecione o autor</option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
          <Input
            {...register("pages", { valueAsNumber: true })}
            placeholder="Páginas"
            type="number"
          />
          <Button type="submit">Salvar</Button>
          <Button type="button" className="danger" onClick={onClose}>
            Cancelar
          </Button>
        </Form>
      </ModalContent>
    </Modal>
  );
};
