import { ResponseCharacters } from "@/services/marvel/types";

export interface CharactersContextType {
  characters: ResponseCharacters;
  setCharacters: (value: ResponseCharacters) => void;
}
