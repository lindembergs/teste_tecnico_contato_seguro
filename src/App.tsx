import React, { useState } from "react";
import { DataProvider } from "./context/DataContext";
import { AuthorList } from "./components/AuthorList";
import { BookList } from "./components/BookList";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8fafc;
  border-radius: 8px;
`;

const Tabs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border: none;
  background: ${(props) => (props.active ? "#007bff" : "#f8f9fa")};
  color: ${(props) => (props.active ? "white" : "black")};
  cursor: pointer;
  border-radius: 4px;
`;

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"books" | "authors">("books");

  return (
    <DataProvider>
      <Container>
        <h1>Gestão da biblioteca</h1>
        <Tabs>
          <Tab
            active={activeTab === "books"}
            onClick={() => setActiveTab("books")}
          >
            Livros
          </Tab>
          <Tab
            active={activeTab === "authors"}
            onClick={() => setActiveTab("authors")}
          >
            Autores
          </Tab>
        </Tabs>
        {activeTab === "books" ? <BookList /> : <AuthorList />}
      </Container>
    </DataProvider>
  );
};
