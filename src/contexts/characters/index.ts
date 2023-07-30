import * as React from "react";
import { CharactersContextType } from "./types";

export const CharactersContext = React.createContext<CharactersContextType>({
  characters: { results: [], count: 0, limit: 0, offset: 0, total: 0 },
  setCharacters: () => {},
});

export const CharactersContextProvider = CharactersContext.Provider;
