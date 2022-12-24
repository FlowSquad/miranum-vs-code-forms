export interface IContentController<T> {
    content: T;
    subscribe(observer: Updatable<T>): void;
}

export interface Updatable<T> {
    update(content: T): void;
}

export type VsCode = {
    postMessage(message: VscMessage): void;
    getState(): VscState;
    setState(state: VscState): void;
};

type VscMessage = {
    type: string;
    content: JSON;
}

type VscState = {
    text: string;
    mode: string;
}