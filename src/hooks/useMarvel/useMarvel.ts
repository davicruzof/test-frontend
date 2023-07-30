"use client";
import { getCharacters } from "@/services/marvel/marvel";
import { ResponseCharacters } from "@/services/marvel/types";
import { useContext, useEffect } from "react";
import { useMutation } from "react-query";
import { useMarvelProps } from "./types";
import { filterEmptyInfos } from "./util";
import { PaginationContext } from "@/contexts/pagination";
import { CharactersContext } from "@/contexts/characters";
import { SearchContext } from "@/contexts/search";
import { LoadingContext } from "@/contexts/loading";

export default function useMarvel(): useMarvelProps {
  const { setLoading } = useContext(LoadingContext);
  const { page } = useContext(PaginationContext);
  const { setCharacters } = useContext(CharactersContext);
  const { activeSearch } = useContext(SearchContext);

  const { mutate: MutateGetCharacters, isLoading } = useMutation({
    mutationFn: (pageSend: number) => getCharacters(pageSend),
    onSuccess: (data: ResponseCharacters) => {
      data && setCharacters(filterEmptyInfos(data));
    },
  });

  useEffect(() => {
    !activeSearch && MutateGetCharacters(page);
  }, [page, activeSearch]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  return {
    MutateGetCharacters,
  };
}
