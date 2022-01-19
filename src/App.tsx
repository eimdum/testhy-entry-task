import { Flex } from "@chakra-ui/react";
import { GifList } from "@components/GifList";

import { Navigation } from "@components/Navigation";

const App: React.FC = () => {
    return (
        <Flex flexDir="column" as="main" flex={1} background="custom.gray">
            <Navigation />
            <GifList />
        </Flex>
    );
};

export default App;
