import { AxiosError } from "axios";
import api from "../api";
import { ResponseCharacters, ResponseComics } from "./types";
import md5 from "md5";

export const rangeLimit = 25;

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const timestamp = new Date().getTime();

const HASH = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

const API_KEY = `ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${HASH}`;

export const getCharacters = async (
  page: number
): Promise<ResponseCharacters> => {
  try {
    const rangeOffset = rangeLimit * page - rangeLimit;
    const { data } = await api.get(
      `/characters?${API_KEY}&limit=${rangeLimit}&offset=${rangeOffset}`
    );
    return data.data;
  } catch (err) {
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};

export const getCharactersByName = async (
  name: string
): Promise<ResponseCharacters> => {
  try {
    const { data } = await api.get(
      `/characters?nameStartsWith=${name}&${API_KEY}`
    );
    return data.data;
  } catch (err) {
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};

export const getComicsByCharacterId = async (
  id: number
): Promise<ResponseComics> => {
  try {
    const { data } = await api.get(`/characters/${id}/comics?${API_KEY}`);
    return data.data;
  } catch (err) {
    const { error } = (err as AxiosError<any, any>)?.response?.data;
    throw new Error(error);
  }
};
