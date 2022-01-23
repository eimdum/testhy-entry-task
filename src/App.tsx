import { Flex } from "@chakra-ui/react";

import { Navigation, GiphyKeyWarning } from "@components";
import { GifsListContainer } from "@containers";

import { GIPHY_API_KEY } from "./config";

const App: React.FC = () => {
    return (
        <Flex flexDir="column" as="main" flex={1} background="custom.gray" color="white">
            <Navigation />
            {GIPHY_API_KEY ? <GifsListContainer /> : <GiphyKeyWarning />}
        </Flex>
    );
};

export default App;
