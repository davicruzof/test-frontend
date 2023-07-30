import * as React from "react";
import { SearchContextType } from "./types";

export const SearchContext = React.createContext<SearchContextType>({
  term: "",
  setTerm: () => {},
  activeSearch: false,
  setActiveSearch: () => false,
});

export const SearchContextProvider = SearchContext.Provider;
