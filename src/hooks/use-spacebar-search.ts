import React from "react";

import { useAppStore } from "./use-app-store";

export function useSpacebarSearch() {
    const { searchNewGifs } = useAppStore();

    const onKeyDownSearchNewGifs = React.useCallback(
        (event: KeyboardEvent) => {
            if (event.code !== "Space") {
                return;
            }

            event.preventDefault();
            searchNewGifs();
        },
        [searchNewGifs],
    );

    React.useEffect(() => {
        document.addEventListener("keydown", onKeyDownSearchNewGifs);

        return () => {
            document.removeEventListener("keydown", onKeyDownSearchNewGifs);
        };
    }, [onKeyDownSearchNewGifs]);

    return null;
}
