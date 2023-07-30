"use client";
import { filterEmptyInfos } from "./../useMarvel/util";
import { getCharactersByName } from "@/services/marvel";
import { useContext, useEffect } from "react";
import { useMutation } from "react-query";
import { useSearchProps, useSearchReturn } from "./type";
import { ResponseCharacters } from "@/services/marvel/types";
import { CharactersContext } from "@/contexts/characters";
import { SearchContext } from "@/contexts/search";
import { LoadingContext } from "@/contexts/loading";
import { PaginationContext } from "@/contexts/pagination";

const useSearch = ({
  MutateGetCharacters,
}: useSearchProps): useSearchReturn => {
  const { setPage } = useContext(PaginationContext);
  const { setLoading } = useContext(LoadingContext);
  const { setCharacters } = useContext(CharactersContext);
  const { term, setTerm, setActiveSearch, activeSearch } =
    useContext(SearchContext);

  const { mutate: MutateGetCharactersByName, isLoading } = useMutation({
    mutationFn: (termSend: string) => getCharactersByName(termSend),
    onSuccess: (data: ResponseCharacters) => {
      data && setCharacters(filterEmptyInfos(data));
    },
  });

  const search = (value: string) => {
    setTerm(value);
    if (value.length === 0) {
      setActiveSearch(false);
      setPage(1);
      MutateGetCharacters(1);
    }
  };

  const handleSearch = () => {
    setActiveSearch(true);
    MutateGetCharactersByName(term);
  };

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    activeSearch && handleSearch();
  }, [activeSearch]);

  return {
    search,
    handleSearch,
  };
};

export default useSearch;
