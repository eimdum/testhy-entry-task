import React from "react";
import { NotAllowedIcon } from "@chakra-ui/icons";
import { Flex, Spinner } from "@chakra-ui/react";

import { GifList } from "@components";
import { useSearchGif, useSpacebarSearch } from "@hooks";

export const GifsListContainer: React.FC = () => {
    useSpacebarSearch();
    const { gifs, isLoading, isError } = useSearchGif();

    if (isLoading || isError) {
        return (
            <Flex flex={1} justifyContent="center" alignItems="center" flexDir="column">
                {isLoading && (
                    <>
                        <Spinner size="lg" mb={4} color="custom.lightGray" />
                        <Flex color="custom.lightGray" fontWeight="semibold" letterSpacing={1} fontSize={18}>
                            Loading...
                        </Flex>
                    </>
                )}

                {isError && (
                    <>
                        <NotAllowedIcon mb={4} color="red.500" w={16} h={16} />
                        <Flex color="red.500" fontSize={18}>
                            Failed to fetch
                        </Flex>
                    </>
                )}
            </Flex>
        );
    }

    return <GifList gifsList={gifs} />;
};
