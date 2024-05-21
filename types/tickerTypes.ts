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
    volunteerId: any
    comments: any[]
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
