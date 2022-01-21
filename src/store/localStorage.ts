import { Schema, Validator } from "jsonschema";
import { LockedGifState } from "./types";

enum LocalStorageKeys {
    QueryParams = "query-params",
    LockedGifs = "locked-gifs",
}

const lockedGifsSchema: Schema = {
    type: "object",
    additionalProperties: false,
    patternProperties: {
        "^[0-9]*$": {
            type: "object",
            properties: {
                url: { type: "string" },
                importDateTime: { type: "string" },
            },
            required: ["url", "importDateTime"],
        },
    },
};

export function saveLockedGifsToLocalStorage(gifs: LockedGifState) {
    localStorage.setItem(LocalStorageKeys.LockedGifs, JSON.stringify(gifs));
}

export function getLockedGifsFromLocalStorage(): LockedGifState {
    const validator = new Validator();
    const lockedGifs = localStorage.getItem(LocalStorageKeys.LockedGifs);

    if (!lockedGifs || !validator.validate(JSON.parse(lockedGifs), lockedGifsSchema).valid) {
        return {};
    }

    return JSON.parse(lockedGifs) as LockedGifState;
}
