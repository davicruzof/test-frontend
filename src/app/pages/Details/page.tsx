"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getComicsByCharacterId } from "@/services/marvel";
import { useMutation } from "react-query";
import { ResponseComics } from "@/services/marvel/types";
import { Loading } from "@/components/Loading";
import { CharacterContext } from "@/contexts/character";
import { filterEmptyInfosComics, filterPathImg } from "./util";
import CardComic from "@/components/CardComic";
import * as S from "./styles";

export default function Details() {
  const navigation = useRouter();
  const { character } = useContext(CharacterContext);
  const [comics, setComics] = useState<ResponseComics | null>(null);
  const searchParams = useSearchParams();

  const search = searchParams?.get("id");

  const { mutate: MutateGetCharacterById, isLoading } = useMutation({
    mutationFn: (id: number) => getComicsByCharacterId(id),
    onSuccess: (data: ResponseComics) => {
      data && setComics(filterEmptyInfosComics(data));
    },
  });

  useEffect(() => {
    search && MutateGetCharacterById(+search!);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.ButtonBack onClick={() => navigation.back()}>Voltar</S.ButtonBack>
      <S.Header>
        <S.CharacterImg src={filterPathImg(character.thumbnail)} alt="" />
        <S.ContainerInfos>
          <S.Title>{character.name}</S.Title>
          <S.LabelAbout>Sobre</S.LabelAbout>
          <S.Description>{character.description}</S.Description>
        </S.ContainerInfos>
      </S.Header>

      <S.ListComicsContainer>
        <S.LabelComics>Quadrinhos</S.LabelComics>
        <S.ListComics>
          {comics && comics.results.length > 0 ? (
            comics.results.map((item) => <CardComic item={item} />)
          ) : (
            <S.EmptyText>
              Nenhum quadrinho encontrado para esse personagem
            </S.EmptyText>
          )}
        </S.ListComics>
      </S.ListComicsContainer>
    </S.Container>
  );
}
