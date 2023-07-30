import * as React from "react";
import { CharacterContextType } from "./types";

export const CharacterContext = React.createContext<CharacterContextType>({
  character: {
    name: "",
    description: "",
    thumbnail: "",
  },
  setCharacter: () => {},
});

export const CharacterContextProvider = CharacterContext.Provider;
