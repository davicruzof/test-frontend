"use client";
import { Character } from "@/services/marvel/types";
import * as S from "./styles";
import { useContext } from "react";
import { LoadingContext } from "@/contexts/loading";
import { useRouter } from "next/navigation";
import { CharacterContext } from "@/contexts/character";

export default function CardCharacter(data: Character) {
  const router = useRouter();
  const { setCharacter } = useContext(CharacterContext);
  const { name, thumbnail, id, description } = data;

  const imageUrlPath = `${thumbnail.path}.${thumbnail.extension}`;

  const { setLoading } = useContext(LoadingContext);

  const openDetails = () => {
    setLoading(true);
    setCharacter({
      name,
      description,
      thumbnail: thumbnail.path,
    });
    router.push(`/pages/Details?id=${id.toString()}`);
  };

  return (
    <S.Button onClick={openDetails}>
      <S.Thumbnail src={imageUrlPath} alt={`foto do personagem ${name}`} />
      <S.Divider />
      <S.Text>{name}</S.Text>
    </S.Button>
  );
}
