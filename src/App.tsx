import React, { useState } from "react";
import { DataProvider } from "./context/DataContext";
import { AuthorList } from "./components/AuthorList";
import { BookList } from "./components/BookList";

import * as S from "./styles/CommonStyles";

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"books" | "authors">("books");

  return (
    <DataProvider>
      <S.Container>
        <h1>Gestão da biblioteca</h1>
        <S.Tabs>
          <S.Tab
            active={activeTab === "books"}
            onClick={() => setActiveTab("books")}
          >
            Livros
          </S.Tab>
          <S.Tab
            active={activeTab === "authors"}
            onClick={() => setActiveTab("authors")}
          >
            Autores
          </S.Tab>
        </S.Tabs>
        {activeTab === "books" ? <BookList /> : <AuthorList />}
      </S.Container>
    </DataProvider>
  );
};
