import { Button } from "@chakra-ui/react";

import { useAppStore } from "@hooks";

export const NavigationActionButton: React.FC = () => {
    const { searchNewGifs } = useAppStore();

    return (
        <Button
            h={7.5}
            fontWeight="medium"
            background="custom.purple"
            _hover={{ background: "custom.darkenPurple" }}
            _active={{ background: "custom.darkenPurple" }}
            color="white"
            ml={1.5}
            fontSize={{ base: 11, sm: 12 }}
            borderRadius="base"
            onClick={searchNewGifs}
        >
            Click here
        </Button>
    );
};
