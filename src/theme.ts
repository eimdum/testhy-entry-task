import { extendTheme, SystemStyleObject } from "@chakra-ui/react";

const global: SystemStyleObject = {
    "html, body": {
        height: "100%",
        fontFamily: "Rubik, sans-serif",
        fontSize: "16px",
    },
    "#root": {
        display: "flex",
        flexDir: "column",
        h: "100%",
        minH: "100vh",
    },
};

const colors = {
    custom: {
        gray: "#2a2b2c",
        lightGray: "#636465",
        purple: "#4327f5",
        darkenPurple: "#250AD6",
    },
};

const sizes = {
    7.5: "1.875rem",
};

export const extendedTheme = extendTheme({
    styles: {
        global,
    },
    colors,
    sizes,
});
