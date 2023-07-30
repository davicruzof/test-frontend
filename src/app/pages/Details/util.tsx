import { Comic, ResponseComics } from "@/services/marvel/types";

export const filterPathImg = (path: string) => {
  if (path.includes("./marvel")) {
    return "./../marvel.jpeg";
  }
  return `${path}.jpg`;
};

export const filterEmptyInfosComics = (
  items: ResponseComics
): ResponseComics => {
  const responseItems: Comic[] = items.results.map((item) => {
    if (!item.description) {
      item.description = "descrição não informada";
    }

    if (item.thumbnail.path.includes("image_not_available")) {
      item.thumbnail.extension = "jpeg";
      item.thumbnail.path = "./../marvel";
    }

    return item;
  });

  return { ...items, results: responseItems };
};
