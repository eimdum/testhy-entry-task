import React from "react";
import { AppStoreContext } from "@store";

export function useAppStore() {
    const context = React.useContext(AppStoreContext);

    if (!context) {
        throw new Error("`useAppStore`must be used within a `AppStoreProvider`");
    }

    return context;
}
