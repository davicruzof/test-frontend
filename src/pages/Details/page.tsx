"use client";
import React, { useEffect } from "react";
import { useRouter as useNav, useSearchParams } from "next/navigation";
import { useMutation } from "react-query";
import { ResponseCharacters } from "@/services/marvel/types";
import { filterEmptyInfos } from "@/hooks/useMarvel/util";
import { getCharacterById } from "@/services/marvel/marvel";

export default function Details() {
  const navigation = useNav();
  const searchParams = useSearchParams();

  const search = searchParams.get("id");

  const { mutate: MutateGetCharacterById } = useMutation({
    mutationFn: (id: number) => getCharacterById(id),
    onSuccess: (data: ResponseCharacters) => {
      console.log(filterEmptyInfos(data));
    },
  });

  useEffect(() => {
    MutateGetCharacterById(+search!);
  }, []);

  return (
    <button onClick={() => navigation.back()}>
      <h1 className="text-white">nome, descrição e as fotos dos quadrinhos</h1>
    </button>
  );
}
