"use client";
import React, { useState } from "react";
import { queryClient } from "./queryClient";
import { QueryClientProvider } from "react-query";
import { PaginationContextProvider } from "./contexts/pagination";
import { CharactersContextProvider } from "./contexts/characters";
import { ResponseCharacters } from "./services/marvel/types";
import { SearchContextProvider } from "./contexts/search";
import { LoadingContextProvider } from "./contexts/loading";
import { CharacterContextProvider } from "./contexts/character";
import { CharacterContextType } from "./contexts/character/types";

export default function App({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState<number>(1);
  const [term, setTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState({
    name: "",
    description: "",
    thumbnail: "",
  });
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const [characters, setCharacters] = useState<ResponseCharacters>({
    results: [],
    count: 0,
    limit: 0,
    offset: 0,
    total: 0,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingContextProvider value={{ loading, setLoading }}>
        <PaginationContextProvider value={{ page, setPage }}>
          <CharactersContextProvider value={{ characters, setCharacters }}>
            <CharacterContextProvider value={{ character, setCharacter }}>
              <SearchContextProvider
                value={{ term, setTerm, activeSearch, setActiveSearch }}
              >
                {children}
              </SearchContextProvider>
            </CharacterContextProvider>
          </CharactersContextProvider>
        </PaginationContextProvider>
      </LoadingContextProvider>
    </QueryClientProvider>
  );
}
