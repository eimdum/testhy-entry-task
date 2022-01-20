import { Flex, Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { NavigationActionButton } from "./NavigationActionButton";

export const Navigation: React.FC = () => {
    return (
        <Flex
            position="sticky"
            top={0}
            zIndex={10}
            alignItems="center"
            background={"custom.gray"}
            px={5}
            py={{ base: 2, sm: undefined }}
            as="nav"
            h={{ base: undefined, sm: 10 }}
            color="white"
            boxShadow="0px 2px 5px 0px rgba(0, 0, 0, 0.2)"
            flexDir={{ base: "column", sm: "row" }}
        >
            <Flex fontSize={24} fontWeight="extrabold" textTransform="uppercase" flex={1}>
                <Text as="h1">Testhy</Text>
            </Flex>
            <Flex alignItems="center" fontSize={{ base: 11, sm: 12 }}>
                <InfoOutlineIcon w={5} h={5} mr={3} color="custom.lightGray" />
                <Text color="custom.lightGray">
                    Press{" "}
                    <Text as="u" color="white">
                        spacebar
                    </Text>{" "}
                    to shuffle or <NavigationActionButton />
                </Text>
            </Flex>
        </Flex>
    );
};
