import { Pagination } from "@mui/material";
import tw from "tailwind-styled-components";

export const Container = tw.div`
    bg-marvel_color 
    h-full 
    flex 
    flex-col 
    justify-center 
    items-center 
    pt-8 
    lg:pt-32 
    lg:pb-72
    pb-96 
    lg:px-24 
    px-8
    bg-marvel_bg`;

export const Title = tw.h1`
    lg:text-9xl text-5xl text-zinc-50 
    text-center
    mb-4 lg:mb-10 font-bold tracking-wide`;

export const Main = tw.div`flex flex-col items-center py-2 px-4 lg:py-8 lg:px-24 h-screen`;

export const ListCardsCharacters = tw.section`flex flex-row flex-wrap 
gap-4 lg:gap-8 justify-center items-start lg:-mt-56 -mt-96 pb-10`;

export const PaginationCustom = tw(Pagination)`pb-16`;

export const EmptyText = tw.span`text-white`;
