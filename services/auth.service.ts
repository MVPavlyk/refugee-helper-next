import {TSignIn, TSignUp, TSignUpResponse} from '@/types/authTypes';
import {axiosServices} from '@/services/axios.service';

export const authServices = {
    signUp: (data: TSignUp): Promise<TSignUpResponse> => axiosServices.post('/api/me', data).then(v => v.data),
    signIn: (data: TSignIn) => axiosServices.post('/api/me/login', data).then(v => v.data)
}
