import {TSignIn, TSignInResponse, TSignUp, TSignUpResponse, TUser} from '@/types/authTypes';
import {axiosServices} from '@/services/axios.service';
import withAuth from '@/lib/helpers/withAuth';

export const authServices = {
    signUp: (data: TSignUp): Promise<TSignUpResponse> => axiosServices.post('/api/me', data).then(v => v.data),
    signIn: (data: TSignIn): Promise<TSignInResponse> => axiosServices.post('/api/me/login', data).then(v => v.data),

    getUser: (token: string): Promise<TUser> => axiosServices.get('/api/me', {
        headers: {
            Authorization: withAuth(token)
        }
    }).then(v => v.data)
}
