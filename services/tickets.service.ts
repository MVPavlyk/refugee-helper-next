import {axiosServices} from '@/services/axios.service';
import {THelpTicket} from '@/types/tickerTypes';

export const ticketsService = {
    getAll: (): Promise<THelpTicket[]> => axiosServices.get('/api/helptickets').then(v => v.data)
}
