"use client";
import * as S from "./styles";
import { IconButton } from "@mui/material";
import { useSearchProps } from "./types";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { SearchContext } from "@/contexts/search";

export function Search({ handleSearch, search }: useSearchProps) {
  const { term } = useContext(SearchContext);
  return (
    <S.PaperCustom>
      <S.Input
        placeholder="Buscar personagem"
        inputProps={{ "aria-label": "Buscar personagem" }}
        value={term}
        onChange={(value) => search(value.target.value)}
      />
      <IconButton
        onClick={() => handleSearch()}
        type="button"
        className="p-3"
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </S.PaperCustom>
  );
}
