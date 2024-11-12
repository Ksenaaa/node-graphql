export enum StatusCode {
    OK = 200,
    UNAUTHORIZED = 401,
    INTERNAL_SERVER_ERROR = 500
}

export const ResponseExtension = {
    [StatusCode.UNAUTHORIZED]: {
        code: 'UNAUTHENTICATED',
        http: { status: StatusCode.UNAUTHORIZED },
    }
}
