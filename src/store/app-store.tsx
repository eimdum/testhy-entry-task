import React from "react";
import { GifsResult } from "@giphy/js-fetch-api";

import { getRandomOffsetNumber, getRandomSearchQuery } from "../utils";

interface SearchGifParams {
    q: string;
    offset: number;
}

interface LockGif {
    index: number;
    gifUrl: string;
    importDateTime: string;
}

interface AppStoreContextState {
    searchGifParams: SearchGifParams;
    searchNewGifs: () => void;
    lockedGifs: Record<number, { url: string; importDateTime: string }>;
    updateLockedGifs: (gif: LockGif, isLocked: boolean) => void;
}

export const AppStoreContext = React.createContext<AppStoreContextState | undefined>(undefined);

export const AppStoreProvider: React.FC = ({ children }) => {
    const [searchGifParams, setSearchGifParams] = React.useState<SearchGifParams>({
        q: getRandomSearchQuery(),
        offset: getRandomOffsetNumber(),
    });
    const [lockedGifs, setLockedGifs] = React.useState<Record<number, { url: string; importDateTime: string }>>({});

    const searchNewGifs = () => {
        const newSearchQuery = getRandomSearchQuery();
        const newOffset = getRandomOffsetNumber();

        setSearchGifParams({ q: newSearchQuery, offset: newOffset });
    };

    const updateLockedGifs = (gif: LockGif, isLocked: boolean) => {
        const lockedGif = lockedGifs?.[gif.index];

        if (!isLocked && lockedGif) {
            delete lockedGifs[gif.index];
        } else {
            lockedGifs[gif.index] = { importDateTime: gif.importDateTime, url: gif.gifUrl };
        }

        setLockedGifs({ ...lockedGifs });
    };

    const state: AppStoreContextState = {
        searchGifParams,
        searchNewGifs,
        updateLockedGifs,
        lockedGifs,
    };

    return <AppStoreContext.Provider value={state}>{children}</AppStoreContext.Provider>;
};
