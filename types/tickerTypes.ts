import {TUser} from '@/types/authTypes';

export type THelpTicket = {
    id: string
    title: string
    description: string
    status: number
    locationLatitude: number
    locationLongitude: number
    createdAt: string
    history: THelpTicketHistory[]
    images: TImage[]
    userId: string
    user: TUser,
    volunteerId?: string,
    volunteer?: TUser,
    comments: TComment[]
}

export type TComment = {
    id: string
    userId: string
    text: string
    createdDate: string
}


export type THelpTicketHistory = {
    record: string
    dateTime: string
}

export type TPaginator = {
    items: THelpTicket[]
    pageNumber: number
    pageSize: number
    totalItems: number
    totalPages: number
    hasPreviousPage: boolean
    hasNextPage: boolean
}

export type TSearchObj = {
    PageNumber?: number,
    PageSize?: number,
    Title?: string,
    Name?: string,
    UserIds?: string,
    VolunteerIds?: string
}

export type TImage = {
    url: string
}
