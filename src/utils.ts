import { GifsResult } from "@giphy/js-fetch-api";

export function sortByImportDateTime(sortableData: GifsResult["data"]) {
    return sortableData.sort((gif1, gif2) => {
        const gif1Date = new Date(gif1.import_datetime).valueOf();
        const gif2Date = new Date(gif2.import_datetime).valueOf();

        return gif2Date - gif1Date;
    });
}

export function getRandomSearchQuery() {
    const searchQueryWords = ["programming", "developer", "frontend", "baltic", "animals", "dog", "cat"];

    return searchQueryWords[Math.floor(Math.random() * searchQueryWords.length)];
}

export function getRandomOffsetNumber() {
    const maxOffset = 10;
    const minOffset = 0;

    return Math.floor(Math.random() * (maxOffset - minOffset + 1) + minOffset);
}
