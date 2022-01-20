import { GifsResult } from "@giphy/js-fetch-api";
import { Grid } from "@chakra-ui/react";

import { GifListItem } from "./GifIListItem";
import { useAppStore } from "@hooks";

interface GifListProps {
    gifsList: GifsResult["data"];
}

export const GifList: React.FC<GifListProps> = ({ gifsList }) => {
    const { lockedGifs } = useAppStore();

    const mappedList = gifsList.map((gif) => {
        return {
            gifSrc: gif.images.downsized.url,
            importDateTime: gif.import_datetime,
        };
    });

    const list = mappedList.map((item, index) => {
        const lockedGif = lockedGifs[index];

        if (lockedGif) {
            return { gifSrc: lockedGif.url, importDateTime: lockedGif.importDateTime };
        }

        return item;
    });

    return (
        <Grid p={5} gap={6} templateColumns="repeat(auto-fit, minmax(auto, 20.9375rem))" justifyContent="center">
            {list.map((gif, index) => {
                return (
                    <GifListItem key={`gif-${gif.gifSrc}-${index}`} gifSrc={gif.gifSrc} index={index} importDateTime={gif.importDateTime} />
                );
            })}
        </Grid>
    );
};
