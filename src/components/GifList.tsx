import { Grid } from "@chakra-ui/react";
import { GifListItem } from "./GifIListItem";

export const GifList: React.FC = () => {
    const placeholderArray = new Array(15).fill(0);

    return (
        <Grid p={5} gap={6} templateColumns="repeat(auto-fit, minmax(auto, 335px))" justifyContent="center">
            {placeholderArray.map((_, index) => {
                return <GifListItem key={index} />;
            })}
        </Grid>
    );
};
