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
                <LockIcon mr={2} />{" "}
                <Flex opacity={isHovered ? 1 : 0} transition="opacity 250ms ease-in">
                    Click to unlock
                </Flex>
            </>
        ) : isHovered ? (
            <>
                <UnlockIcon mr={2} />
                Click to lock
            </>
        ) : null}
    </Flex>
);
