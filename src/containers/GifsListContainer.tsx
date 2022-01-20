import React from "react";
import { useQuery } from "react-query";
import { Flex } from "@chakra-ui/react";
import { GifsResult } from "@giphy/js-fetch-api";

import { Gif } from "@store";
import { GifList } from "@components";
import { useAppStore, useSpacebarSearch } from "@hooks";
import { apiRoutes, axiosClient, RequestKeys } from "@api";

export const GifsListContainer: React.FC = () => {
    useSpacebarSearch();
    const {
        gifs,
        searchGifParams: { q, offset },
        updateGifs,
    } = useAppStore();

    const { data, isLoading, isError, refetch } = useQuery(RequestKeys.SearchGif, async () => {
        const result = await axiosClient.get<GifsResult>(apiRoutes.searchGif, {
            params: {
                q,
                offset,
            },
        });

        return result.data;
    });

    React.useEffect(() => {
        refetch();
    }, [q, offset, refetch]);

    React.useEffect(() => {
        const gifData = data?.data.map<Gif>((item) => ({
            importDateTime: item.import_datetime,
            url: item.images.downsized.url,
        }));

        if (gifData) {
            updateGifs(gifData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    if (isLoading) {
        return <Flex>Is Loading</Flex>;
    }

    if (isError) {
        return <Flex>Failed to load</Flex>;
    }

    return <GifList gifsList={gifs} />;
};
