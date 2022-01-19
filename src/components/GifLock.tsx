import { Flex } from "@chakra-ui/react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";

interface GifLockProps {
    isLocked: boolean;
    isHovered: boolean;
}

export const GifLock: React.FC<GifLockProps> = ({ isHovered, isLocked }) => (
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
);
