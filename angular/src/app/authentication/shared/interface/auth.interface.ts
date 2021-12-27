export interface LoginCreditionals {
    email: string,
    password: string,
    is24HrsLogin?: boolean
}

export interface AuthResponse {
    token: string,
    role: string,
    _id: string,
    name: string
}

export interface UserCreditional {
    name: string,
    role: string,
    email: string,
    password: string,
    _id?: string,
}

