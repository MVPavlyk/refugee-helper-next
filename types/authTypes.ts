export type TSignUp = {
    email: string
    userName: string
    firstName: string
    lastName: string
    password: string
}

export type TSignIn = {
    email: string
    password: string
}

export type TSignUpResponse = {
    id: string
    userName: string
    email: string
    firstName: string
    lastName: string
    phoneNumber: any
    avatarUrl: any
    role: any
    lastLogin: string
}
