import { useState } from "react";
import { Flex, GridItem, Image } from "@chakra-ui/react";

import { GifLock } from "./GifLock";
import { useAppStore } from "@hooks";

interface GifListItemProps {
    gifSrc: string;
    index: number;
    importDateTime: string;
}

export const GifListItem: React.FC<GifListItemProps> = ({ gifSrc, index, importDateTime }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isLocked, setIsLocked] = useState<boolean>(false);
    const { updateLockedGifs } = useAppStore();

    return (
        <GridItem
            minW={0}
            h="260px"
            background="custom.lightGray"
            _hover={{ cursor: "pointer" }}
            position="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
                setIsLocked(!isLocked);
                updateLockedGifs({ gifUrl: gifSrc, index, importDateTime }, !isLocked);
            }}
        >
            <Image w="100%" h="100%" src={gifSrc} objectFit="cover" />
            <Flex
                w="100%"
                h="100%"
                position="absolute"
                bottom="0"
                left="0"
                color="white"
                alignItems="flex-end"
                transition="border 250ms ease-in"
                border="4px solid transparent"
                _hover={{
                    borderColor: "custom.purple",
                }}
            >
                <Flex
                    transition="opacity 250ms ease-in"
                    opacity={isHovered ? 1 : 0}
                    w="100%"
                    h={14}
                    position="absolute"
                    background="linear-gradient(rgba(0, 0, 0, 0), rgba(18, 18, 18, 0.6))"
                />
                <GifLock isHovered={isHovered} isLocked={isLocked} />
            </Flex>
        </GridItem>
    );
};
