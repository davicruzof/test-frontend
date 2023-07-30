import { Character, Comic, ResponseCharacters } from "@/services/marvel/types";

export const filterEmptyInfos = (
  items: ResponseCharacters
): ResponseCharacters => {
  const responseItems: Character[] = items.results.map((item) => {
    if (item.description.length === 0) {
      item.description = "descrição não informada";
    }

    if (item.thumbnail.path.includes("image_not_available")) {
      item.thumbnail.extension = "jpeg";
      item.thumbnail.path = "./marvel";
    }

    return item;
  });

  return { ...items, results: responseItems };
};
