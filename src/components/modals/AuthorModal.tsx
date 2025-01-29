import React from "react";
import { useForm } from "react-hook-form";
import { Author, AuthorModalProps } from "../../types/types";
import {
  Modal,
  ModalContent,
  Form,
  Input,
  Button,
} from "../../styles/CommonStyles";

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
        <h2>{author ? "Editar autor" : "Adicionar autor"}</h2>
        <Form onSubmit={handleSubmit(onSubmitForm)}>
          <Input {...register("name")} placeholder="Digite o nome" required />
          <Input
            {...register("email")}
            placeholder="Digite o Email"
            type="email"
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
