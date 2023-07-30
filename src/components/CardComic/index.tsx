import React from "react";
import { Comic } from "@/services/marvel/types";
import * as S from "./styles";

export default function CardComic({ item }: { item: Comic }) {
  const returnUrl = (thumbnail: { path: string; extension: string }) =>
    `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <S.Container>
      <S.Thumbnail src={returnUrl(item.thumbnail)} />
      <S.ContainerTexts>
        <S.Title>{item.title}</S.Title>
        <S.Label>Criado por:</S.Label>
        <S.ListCreators>
          {item.creators.items.map((item) => (
            <S.CreatorName>
              {item.name} - {item.role},{" "}
            </S.CreatorName>
          ))}
        </S.ListCreators>
      </S.ContainerTexts>
    </S.Container>
  );
}
