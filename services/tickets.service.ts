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
    }).then(v => v.data)
}
