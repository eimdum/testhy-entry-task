import { GifsResult } from "@giphy/js-fetch-api";
import { Grid } from "@chakra-ui/react";

import { GifListItem } from "./GifIListItem";

interface GifListProps {
    gifsList: GifsResult["data"];
}

export const GifList: React.FC<GifListProps> = ({ gifsList }) => {
    return (
        <Grid p={5} gap={6} templateColumns="repeat(auto-fit, minmax(auto, 20.9375rem))" justifyContent="center">
            {gifsList.map((gif, index) => {
                return <GifListItem key={`gif-${gif.id}-${index}`} gifSrc={gif.images.original.url} />;
            })}
        </Grid>
    );
};
