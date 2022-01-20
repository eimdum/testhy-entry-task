export type Gif = BaseGif;
export type LockedGifState = Record<number, BaseGif>;

export interface BaseGif {
    url: string;
    importDateTime: string;
}

export interface LockGif extends BaseGif {
    index: number;
}

export interface SearchGifParams {
    q: string;
    offset: number;
}
