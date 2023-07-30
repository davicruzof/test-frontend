import tw from "tailwind-styled-components";

export const Button = tw.button`bg-white  shadow-md rounded-md  lg:rounded-lg cursor-pointer lg:hover:scale-105 lg:before:rounded-lg `;

export const Thumbnail = tw.img`lg:w-56 lg:h-56 w-36 h-36 rounded-tl-md rounded-tr-md lg:rounded-tl-lg lg:rounded-tr-lg object-cover`;

export const Divider = tw.hr`h-2 bg-marvel_color`;

export const Text = tw.h1`p-3 flex-wrap flex h-20 items-center justify-center lg:w-56 w-36 lg:text-lg text-sm font-semibold text-marvel_color bg-white rounded-md`;
