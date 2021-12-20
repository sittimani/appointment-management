export interface LoginCreditionals {
    email: string,
    password: string
}

export interface AuthResponse {
    token: string,
    role: string,
    _id: string
}

export interface UserCreditional {
    name: string,
    role: string,
    email: string,
    password: string,
    _id?: string,
}

