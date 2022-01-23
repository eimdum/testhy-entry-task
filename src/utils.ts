import { Gif } from "@store";

export function sortByImportDateTime(gifList: Gif[]) {
    return gifList.sort((gif1, gif2) => {
        const gif1Date = new Date(gif1.importDateTime).valueOf();
        const gif2Date = new Date(gif2.importDateTime).valueOf();

        return gif2Date - gif1Date;
    });
}

export function getRandomSearchQuery() {
    const searchQueryWords = ["programming", "developer", "frontend", "animals", "dog", "cat", "gaming", "meme"];

    return searchQueryWords[Math.floor(Math.random() * searchQueryWords.length)];
}

export function getRandomOffsetNumber() {
    const maxOffset = 50;
    const minOffset = 0;

    return Math.floor(Math.random() * (maxOffset - minOffset + 1) + minOffset);
}
