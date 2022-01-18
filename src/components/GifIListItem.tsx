import { useState } from "react";
import { Flex, GridItem } from "@chakra-ui/react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";

export const GifListItem: React.FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isLocked, setIsLocked] = useState<boolean>(false);

    return (
        <GridItem
            minW={0}
            h="260px"
            bg="orange"
            _hover={{ cursor: "pointer" }}
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
                <Flex m={4} alignItems="center" fontWeight="medium" fontSize={12} h={5} zIndex={1}>
                    {isLocked ? (
                        <>
                            <LockIcon mr={2} /> {isHovered ? "Click to unlock" : null}
                        </>
                    ) : isHovered ? (
                        <>
                            <UnlockIcon mr={2} /> Click to lock
                        </>
                    ) : null}
                </Flex>
            </Flex>
        </GridItem>
    );
};
