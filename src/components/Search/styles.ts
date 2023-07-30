import { InputBase, Paper } from "@mui/material";
import tw from "tailwind-styled-components";

export const PaperCustom = tw(
  Paper
)`w-full pt-1 pb-1 pl-2 pr-2 flex items-center mb-1`;

export const Input = tw(InputBase)`flex ml-1 flex-1`;
