import tw from "tailwind-styled-components";

export const Container = tw.div`flex flex-row mb-8 bg-white p-4 rounded-md`;

export const Thumbnail = tw.img`h-48 w-32 rounded-sm border border-marvel_color`;

export const ContainerTexts = tw.div`flex flex-col ml-4`;

export const Title = tw.span`text-slate-900 font-semibold text-md`;

export const Label = tw.span`text-slate-900 font-semibold text-md mt-4`;

export const ListCreators = tw.div`flex flex-row`;

export const CreatorName = tw.span`text-slate-900 font-normal text-sm flex-row contents`;
