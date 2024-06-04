import {TUser, TUserPaginator} from '@/types/authTypes';
import {axiosServices} from '@/services/axios.service';
import buildQueryParams from '@/lib/helpers/buildQueryParams';
import withAuth from '@/lib/helpers/withAuth';

export const userService = {
    search: (searchObj): Promise<TUserPaginator> => axiosServices.get(`/api/users/search${buildQueryParams(searchObj)}`).then(v => v.data),
    patchRole: (id: string, role: string, token: string) => axiosServices.patch(`/api/roles${buildQueryParams({
        id,
        role
    })}`, {}, {
        headers: {
            Authorization: withAuth(token)
        }
    }),
    getUserById: (userId): Promise<TUser> => axiosServices.get(`/api/users/${userId}`).then(v => v.data)
}
