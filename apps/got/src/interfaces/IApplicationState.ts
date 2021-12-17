export interface IReduxPromiseState {
    isFetching: boolean;
    failed: boolean;
    data: any;
    status?: number;
}

export interface IBaseState {
    [key: symbol]: any;
}

export interface ICharactersState extends IBaseState {
    characters: IReduxPromiseState;
    characterDetails: IReduxPromiseState;
}
