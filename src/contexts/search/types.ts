export interface SearchContextType {
  term: string;
  setTerm: (value: string) => void;
  activeSearch: boolean;
  setActiveSearch: (value: boolean) => void;
}
