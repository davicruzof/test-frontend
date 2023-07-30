import * as React from "react";
import { LoadingContextType } from "./types";

export const LoadingContext = React.createContext<LoadingContextType>({
  loading: true,
  setLoading: () => true,
});

export const LoadingContextProvider = LoadingContext.Provider;
