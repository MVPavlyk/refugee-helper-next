import {axiosServices} from '@/services/axios.service';
import {THelpTicket, TPaginator, TSearchObj} from '@/types/tickerTypes';
import buildQueryParams from '@/lib/helpers/buildQueryParams';

export const ticketsService = {
    getAll: (): Promise<THelpTicket[]> => axiosServices.get('/api/helptickets').then(v => v.data),
    search: (searchObj: TSearchObj): Promise<TPaginator> =>
        axiosServices.get(`/api/helptickets/search${buildQueryParams(searchObj)}`).then(v => v.data),
    getOne: (ticketId: string): Promise<THelpTicket> => axiosServices.get(`/api/helptickets/${ticketId}`).then(v => v.data)
}
