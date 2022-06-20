import styled from "styled-components";

export const Linksdiv = styled.div.attrs({
    className:
        "flex-grow flex flex-wrap justify-center space-between md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center",
})``;

export const Catgdiv = styled.div.attrs({
    className: "lg:w-1/4 md:w-1/2 px-4",
})``;

export const Catgtitle = styled.h2.attrs({
    className: "title-font font-bold text-white tracking-widest text-md mb-3",
})``;

export const Alink = styled.a.attrs({
    className: "text-white cursor-pointer hover:text-red-300",
})``;
