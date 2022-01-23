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
        window.addEventListener("keydown", onKeyDownSearchNewGifs);

        return () => {
            window.removeEventListener("keydown", onKeyDownSearchNewGifs);
        };
    }, [onKeyDownSearchNewGifs]);

    return null;
}
