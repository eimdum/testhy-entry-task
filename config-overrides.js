const path = require("path");

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            "@api": path.resolve(__dirname, "src/api"),
            "@store": path.resolve(__dirname, "src/store"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@components": path.resolve(__dirname, "src/components"),
            "@containers": path.resolve(__dirname, "src/containers"),
        },
    };

    return config;
};
