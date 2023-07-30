import { Dispatch, SetStateAction } from "react";

export interface useSearchReturn {
  search: (value: string) => void;
  handleSearch: () => void;
}

export interface useSearchProps {
  MutateGetCharacters: (value: number) => void;
}
