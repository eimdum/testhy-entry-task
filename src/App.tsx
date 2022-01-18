import { Flex } from "@chakra-ui/react";
import { Navigation } from "@components/Navigation";

const App: React.FC = () => {
    return (
        <Flex flexDir="column" as="main" flex={1} background="custom.gray">
            <Navigation />
            <Flex flex={1} m={5}>
                Images
            </Flex>
        </Flex>
    );
};

export default App;
