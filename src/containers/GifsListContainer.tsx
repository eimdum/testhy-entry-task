import { useQuery } from "react-query";
import { GifsResult } from "@giphy/js-fetch-api";
import { Flex } from "@chakra-ui/react";

import { GifList } from "@components";
import { apiRoutes, axiosClient, RequestKeys } from "@api";

import { sortByImportDateTime } from "../utils";

export const GifsListContainer: React.FC = () => {
    const { data, isLoading, isError } = useQuery(RequestKeys.SearchGif, async () => {
        const result = await axiosClient.get<GifsResult>(apiRoutes.searchGif, {
            params: {
                q: "cat",
                offset: 1,
            },
        });

        return result.data;
    });

    if (isLoading) {
        return <Flex>Is Loading</Flex>;
    }

    if (isError) {
        return <Flex>Failed to load</Flex>;
    }

    return <GifList gifsList={sortByImportDateTime(data?.data ?? [])} />;
};
