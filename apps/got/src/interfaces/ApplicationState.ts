export interface IReduxPromiseState {
    isFetching: boolean;
    failed: boolean;
    status?: number;
}

export interface ICharactersState extends IReduxPromiseState {
    characters: any;
}
