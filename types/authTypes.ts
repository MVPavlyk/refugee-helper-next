import {THelpTicket} from '@/types/tickerTypes';

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

export type TSignInResponse = {
    token: string
    sub: string
    validTo: string
}

export type TUser = {
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


export type TUserPaginator = {
    items: TUser[]
    pageNumber: number
    pageSize: number
    totalItems: number
    totalPages: number
    hasPreviousPage: boolean
    hasNextPage: boolean
}
