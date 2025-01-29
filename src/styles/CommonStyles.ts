// src/components/styles/StyledComponents.ts
import styled from "styled-components";
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8fafc;
  border-radius: 8px;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border: none;
  background: ${(props) => (props.active ? "#007bff" : "#f8f9fa")};
  color: ${(props) => (props.active ? "white" : "black")};
  cursor: pointer;
  border-radius: 4px;
`;
export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background-color: #4361ee;
  color: white;
  cursor: pointer;
  margin: 4px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(67, 97, 238, 0.15);

  &:hover {
    background-color: #3730a3;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(67, 97, 238, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &.danger {
    background-color: #ef4444;
    box-shadow: 0 2px 4px rgba(239, 68, 68, 0.15);

    &:hover {
      background-color: #dc2626;
      box-shadow: 0 4px 6px rgba(239, 68, 68, 0.2);
    }
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 24px 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  th,
  td {
    padding: 16px;
    text-align: left;
    border-bottom: 1px solid #f1f5f9;
  }

  th {
    background-color: #f8fafc;
    font-weight: 600;
    color: #1e293b;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
  }

  tr {
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #f8fafc;
    }

    &:last-child td {
      border-bottom: none;
    }
  }

  td {
    color: #475569;
  }

  @media (max-width: 768px) {
    border-radius: 8px;

    th,
    td {
      padding: 12px;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 32px;
  border-radius: 16px;
  min-width: 400px;
  max-width: 90%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    min-width: unset;
    width: 90%;
    padding: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  transition: all 0.2s ease;
  color: #1e293b;
  background-color: #fff;

  &:focus {
    outline: none;
    border-color: #4361ee;
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }

  &:disabled {
    background-color: #f1f5f9;
    cursor: not-allowed;
  }
`;

export const FormLabel = styled.label`
  font-weight: 500;
  color: #475569;
  margin-bottom: -16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TableWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin: 24px 0;
`;

export const TableHeader = styled.div`
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #f1f5f9;

  h2 {
    margin: 0;
    color: #1e293b;
    font-size: 1.25rem;
    font-weight: 600;
  }
`;
