import {axiosServices} from '@/services/axios.service';
import {THelpTicket, TPaginator, TSearchObj} from '@/types/tickerTypes';
import buildQueryParams from '@/lib/helpers/buildQueryParams';
import withAuth from '@/lib/helpers/withAuth';

export const ticketsService = {
    search: (searchObj: TSearchObj): Promise<TPaginator> =>
        axiosServices.get(`/api/helptickets/search${buildQueryParams(searchObj)}`).then(v => v.data),
    getOne: (ticketId: string): Promise<THelpTicket> => axiosServices.get(`/api/helptickets/${ticketId}`).then(v => v.data),
    createTicket: (data: FormData, token: string): Promise<THelpTicket> => axiosServices.post('/api/helptickets', data, {
        headers: {Authorization: withAuth(token)}
    }).then(v => v.data),
    assign: (ticketId: string, token: string): Promise<any> => axiosServices.patch(`/api/helptickets/${ticketId}/assign`, {}, {
        headers: {Authorization: withAuth(token)}
    }),
    unassign: (ticketId: string, token: string): Promise<any> => axiosServices.patch(`/api/helptickets/${ticketId}/unassign`, {}, {
        headers: {Authorization: withAuth(token)}
    }),
    changeStatus: (ticketId: string, token: string, status: number): Promise<any> => axiosServices.patch(`/api/helptickets/${ticketId}/status?status=${status}`, {}, {
        headers: {Authorization: withAuth(token)}
    }),

    delete: (ticketId: string, token: string): Promise<any> => axiosServices.delete(`/api/helptickets/${ticketId}`, {
        headers: {Authorization: withAuth(token)}
    }),
    addComment: (ticketId: string, token: string, text: string): Promise<THelpTicket> => axiosServices.post(`/api/helptickets/${ticketId}/comment`, {text}, {
        headers: {Authorization: withAuth(token)}
    }).then(v => v.data)
}
