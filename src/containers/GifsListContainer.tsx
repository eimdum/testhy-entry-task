import { useQuery } from "react-query";
import { GifsResult } from "@giphy/js-fetch-api";
import { Flex } from "@chakra-ui/react";

import { useAppStore } from "@hooks";
import { GifList } from "@components";
import { apiRoutes, axiosClient, RequestKeys } from "@api";

import React from "react";

export const GifsListContainer: React.FC = () => {
    const {
        searchGifParams: { q, offset },
        lockedGifs,
        searchNewGifs,
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

    console.log(lockedGifs);

    React.useEffect(() => {
        refetch();
    }, [q, offset, refetch]);

    const onKeyDownSearchNewGifs = React.useCallback(
        (event: KeyboardEvent) => {
            if (event.code !== "Space") {
                return;
            }

            event.preventDefault();
            searchNewGifs();
        },
        [searchNewGifs],
    );

    React.useEffect(() => {
        document.addEventListener("keydown", onKeyDownSearchNewGifs);

        return () => {
            document.removeEventListener("keydown", onKeyDownSearchNewGifs);
        };
    }, [onKeyDownSearchNewGifs]);

    if (isLoading) {
        return <Flex>Is Loading</Flex>;
    }

    if (isError) {
        return <Flex>Failed to load</Flex>;
    }

    return <GifList gifsList={data?.data ?? []} />;
};
