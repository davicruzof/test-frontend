import tw from "tailwind-styled-components";

export const Container = tw.div`lg:p-20 p-6 w-full bg-marvel_bg bg-no-repeat`;

export const Header = tw.div`flex lg:flex-row flex-col-reverse`;

export const CharacterImg = tw.img`object-cover h-96 lg:w-96 rounded-md w-full lg:max-w-fit`;

export const ContainerInfos = tw.div`lg:pl-8 mb-8`;

export const Title = tw.h1`text-white font-bold lg:text-5xl text-3xl mt-3`;

export const LabelAbout = tw.span`text-white font-semibold text-md sm:pt-10`;

export const Description = tw.h2`text-white font-normal text-lg lg:mt-3 mt-1`;

export const ListComicsContainer = tw.div`mt-10 mb-8 w-full`;

export const LabelComics = tw.span`text-white font-semibold text-md`;

export const ListComics = tw.div`my-10`;

export const ButtonBack = tw.button`hover:bg-white hover:text-marvel_color  border-2 font-semibold text-white px-8 py-2 rounded-md border-white mb-8`;

export const EmptyText = tw.span`text-white font-medium text-md`;
