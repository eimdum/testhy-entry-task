import { useState } from "react";
import { Flex, GridItem } from "@chakra-ui/react";

import { GifLock } from "./GifLock";

export const GifListItem: React.FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isLocked, setIsLocked] = useState<boolean>(false);

    return (
        <GridItem
            minW={0}
            h="260px"
            bg="orange"
            _hover={{ cursor: "pointer", boxShadow: "inset 0 0 0 4px #4327f5" }}
            position="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsLocked(!isLocked)}
        >
            <Flex w="100%" h="100%" position="absolute" top="0" left="0" color="white" alignItems="flex-end">
                <Flex
                    w="100%"
                    h={14}
                    position="absolute"
                    background="linear-gradient(rgba(0, 0, 0, 0), rgba(18, 18, 18, 0.6))"
                    transition="opacity 250ms ease-in"
                    opacity={isHovered ? 1 : 0}
                />
                <GifLock isHovered={isHovered} isLocked={isLocked} />
            </Flex>
        </GridItem>
    );
};
