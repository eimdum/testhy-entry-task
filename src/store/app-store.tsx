import React from "react";

import { getLockedGifsFromLocalStorage, saveLockedGifsToLocalStorage } from "./localStorage";
import { Gif, SearchGifParams, LockedGifState, LockGif } from "./types";
import { getRandomOffsetNumber, getRandomSearchQuery } from "../utils";

interface AppStoreContextState {
    gifs: Gif[];
    searchGifParams: SearchGifParams;
    lockedGifs: LockedGifState;
    searchNewGifs: () => void;
    updateGifs: (newGifs: Gif[]) => void;
    updateLockedGifs: (gif: LockGif, isLocked: boolean) => void;
}

export const AppStoreContext = React.createContext<AppStoreContextState | undefined>(undefined);

export const AppStoreProvider: React.FC = ({ children }) => {
    const [gifs, setGifs] = React.useState<Gif[]>([]);
    const [lockedGifs, setLockedGifs] = React.useState<LockedGifState>(getLockedGifsFromLocalStorage());
    const [searchGifParams, setSearchGifParams] = React.useState<SearchGifParams>({
        q: getRandomSearchQuery(),
        offset: getRandomOffsetNumber(),
    });

    const updateGifs = (newGifs: Gif[]) => {
        const mixedGifList = newGifs.map((gif, index) => {
            const lockedGif = lockedGifs[index];

            if (lockedGif) {
                return lockedGif;
            }

            return gif;
        });

        setGifs([...mixedGifList]);
    };

    const searchNewGifs = () => {
        const newSearchQuery = getRandomSearchQuery();
        const newOffset = getRandomOffsetNumber();

        setSearchGifParams({ q: newSearchQuery, offset: newOffset });
    };

    const updateLockedGifs = ({ index, ...restGif }: LockGif, isLocked: boolean) => {
        const lockedGif = lockedGifs?.[index];

        if (!isLocked && lockedGif) {
            delete lockedGifs[index];
        } else {
            lockedGifs[index] = { ...restGif };
        }

        saveLockedGifsToLocalStorage(lockedGifs);
        setLockedGifs({ ...lockedGifs });
    };

    const state: AppStoreContextState = {
        gifs,
        lockedGifs,
        searchGifParams,
        updateGifs,
        searchNewGifs,
        updateLockedGifs,
    };

    return <AppStoreContext.Provider value={state}>{children}</AppStoreContext.Provider>;
};
