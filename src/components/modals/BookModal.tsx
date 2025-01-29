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
        <h2>{book ? "Edit Book" : "Add Book"}</h2>
        <Form onSubmit={handleSubmit(onSubmitForm)}>
          <Input {...register("name")} placeholder="Title" required />
          <select {...register("author_id")} required>
            <option value="">Select Author</option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
          <Input
            {...register("pages", { valueAsNumber: true })}
            placeholder="Pages"
            type="number"
          />
          <Button type="submit">Save</Button>
          <Button type="button" className="danger" onClick={onClose}>
            Cancel
          </Button>
        </Form>
      </ModalContent>
    </Modal>
  );
};
