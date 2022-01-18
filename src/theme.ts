import { extendTheme, SystemStyleObject } from "@chakra-ui/react";

const global: SystemStyleObject = {
    "html, body": {
        height: "100%",
    },
    "#root": {
        display: "flex",
        flexDir: "column",
        h: "100%",
        minH: "100vh",
    },
};

export const extendedTheme = extendTheme({
    styles: {
        global,
    },
});
