export interface IReduxPromiseState {
    isFetching: boolean;
    failed: boolean;
    status?: number;
}

export interface IMoviesState extends IReduxPromiseState {
    list: any;
}
