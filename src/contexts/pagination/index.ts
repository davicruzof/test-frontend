import * as React from "react";
import { PaginationContextType } from "./types";

export const PaginationContext = React.createContext<PaginationContextType>({
  page: 1,
  setPage: () => {},
});

export const PaginationContextProvider = PaginationContext.Provider;
