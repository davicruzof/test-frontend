"use client";
import { useContext } from "react";
import { rangeLimit } from "@/services/marvel";
import CardCharacter from "@/components/CardCharacter";
import { Search } from "@/components/Search";
import useMarvel from "@/hooks/useMarvel/useMarvel";
import useSearch from "@/hooks/useSearch/useSearch";
import * as S from "./styles";
import { PaginationContext } from "@/contexts/pagination";
import { CharactersContext } from "@/contexts/characters";
import { LoadingContext } from "@/contexts/loading";
import { Loading } from "@/components/Loading";

export default function HomePage() {
  const { page, setPage } = useContext(PaginationContext);
  const { characters } = useContext(CharactersContext);
  const { loading } = useContext(LoadingContext);

  const { MutateGetCharacters } = useMarvel();

  const { handleSearch, search } = useSearch({ MutateGetCharacters });

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <S.Container>
        <S.Title>MARVEL HEROES</S.Title>
        <Search handleSearch={handleSearch} search={search} />
      </S.Container>

      <S.Main>
        {characters && (
          <>
            <S.ListCardsCharacters>
              {characters.results.length > 0 ? (
                characters?.results.map((item) => (
                  <CardCharacter {...item} key={item.id} />
                ))
              ) : (
                <S.EmptyText>Nenhum personagem foi encontrado</S.EmptyText>
              )}
            </S.ListCardsCharacters>
            {characters?.total > rangeLimit && (
              <S.PaginationCustom
                count={Math.ceil(characters?.total / rangeLimit)}
                page={page}
                onChange={(_, page) => setPage(page)}
                variant="outlined"
                shape="rounded"
                boundaryCount={2}
                color="primary"
                size="large"
              />
            )}
          </>
        )}
      </S.Main>
    </>
  );
}
