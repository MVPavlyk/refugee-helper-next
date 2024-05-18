export type THelpTicket = {
    id: string
    title: string
    description: string
    status: number
    locationLatitude: number
    locationLongitude: number
    createdAt: string
    history: THelpTicketHistory[]
    images: any[]
    userId: string
    volunteerId: any
    comments: any[]
}

export type THelpTicketHistory = {
    record: string
    dateTime: string
}
