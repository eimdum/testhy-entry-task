import { Grid } from "@chakra-ui/react";

import { Gif } from "@store";
import { useAppStore } from "@hooks";

import { GifListItem } from "./GifIListItem";

interface GifListProps {
    gifsList: Gif[];
}

export const GifList: React.FC<GifListProps> = ({ gifsList }) => {
    const { updateLockedGifs, lockedGifs } = useAppStore();

    return (
        <Grid p={5} gap={6} templateColumns="repeat(auto-fit, minmax(auto, 20.9375rem))" justifyContent="center">
            {gifsList.map((gif, index) => {
                const { url } = gif;
                const isGifLocked = lockedGifs[index];

                return (
                    <GifListItem
                        gifSrc={url}
                        key={`gif-${url}-${index}`}
                        isGifLocked={!!isGifLocked}
                        onGifItemClick={(isLocked) => updateLockedGifs({ ...gif, index }, isLocked)}
                    />
                );
            })}
        </Grid>
    );
};
