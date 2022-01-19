import axios from "axios";
import { SearchOptions } from "@giphy/js-fetch-api";

import { GIPHY_API_KEY, GIPHY_BASE_API_URL } from "../config";

export enum RequestKeys {
    SearchGif = "search-gif",
}

const limit = 25;
const rating: SearchOptions["rating"] = "g";

export const axiosClient = axios.create({
    baseURL: GIPHY_BASE_API_URL,
    headers: {
        "Content-type": "application/json",
    },
    params: {
        api_key: GIPHY_API_KEY,
        limit,
        rating,
        lang: "en",
    },
});

export const apiRoutes = {
    searchGif: `/v1/gifs/search`,
};
