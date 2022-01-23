import React from "react";
import { useQuery } from "react-query";
import { GifsResult } from "@giphy/js-fetch-api";

import { Gif } from "@store";
import { RequestKeys, axiosClient, apiRoutes } from "@api";

import { useAppStore } from "./use-app-store";

export function useSearchGif() {
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

    /**
     * Refetch data when query and offset changes.
     */
    React.useEffect(() => {
        refetch();
    }, [q, offset, refetch]);

    /**
     * Update app store gifs when new data is fetched.
     */
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

    return { isLoading, isError, gifs };
}
