interface ResponseMarvel {
  offset: number;
  limit: number;
  total: number;
  count: number;
}

export interface ResponseCharacters extends ResponseMarvel {
  results: Character[];
}

export interface ResponseComics extends ResponseMarvel {
  results: Comic[];
}

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
}

export interface Comic {
  id: number;
  description: string;
  title?: string;
  creators: Creators;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Creators {
  items: ItemComic[];
  returned: number;
}

export interface ItemComic {
  name: string;
  role: string;
}
