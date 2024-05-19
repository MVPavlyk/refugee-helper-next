import {TUser} from '@/types/authTypes';
import {axiosServices} from '@/services/axios.service';
import withAuth from '@/lib/helpers/withAuth';

export const userService = {
    getOne: (userId: string, token: string): Promise<TUser> => axiosServices.get(`/api/users/${userId}`, {
            headers: {
                Authorization: withAuth(token)
            }
        }
    ).then(v => v.data)
}
