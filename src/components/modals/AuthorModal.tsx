import React from "react";
import { useForm } from "react-hook-form";
import { Author } from "../../types/types";
import {
  Modal,
  ModalContent,
  Form,
  Input,
  Button,
} from "../../styles/CommonStyles";

interface AuthorModalProps {
  onClose: () => void;
  onSubmit: (data: Author) => void;
  author?: Author;
}

export const AuthorModal: React.FC<AuthorModalProps> = ({
  onClose,
  onSubmit,
  author,
}) => {
  const { register, handleSubmit } = useForm<Author>({
    defaultValues: author,
  });

  const onSubmitForm = (data: Author) => {
    onSubmit({
      ...data,
      id: author?.id || crypto.randomUUID(),
    });
    onClose();
  };

  return (
    <Modal>
      <ModalContent>
        <h2>{author ? "Edit Author" : "Add Author"}</h2>
        <Form onSubmit={handleSubmit(onSubmitForm)}>
          <Input {...register("name")} placeholder="Name" required />
          <Input {...register("email")} placeholder="Email" type="email" />
          <Button type="submit">Save</Button>
          <Button type="button" className="danger" onClick={onClose}>
            Cancel
          </Button>
        </Form>
      </ModalContent>
    </Modal>
  );
};
