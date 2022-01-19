import { Flex, Text } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

export const GiphyKeyWarning: React.FC = () => (
    <Flex flex={1} flexDir="column" color="white" alignItems="center" justifyContent="center" fontSize={24}>
        <WarningTwoIcon mb={4} w={16} h={16} color="orange" />
        Missing Giphy API Key
        <Text fontSize={16} color="custom.lightGray">
            Add key to env file and run project again
        </Text>
    </Flex>
);
