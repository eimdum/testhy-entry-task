import { Button } from "@chakra-ui/react";

export const NavigationActionButton: React.FC = () => (
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
    >
        Click here
    </Button>
);
