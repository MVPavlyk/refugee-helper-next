'use client'

import React from 'react';
import {useForm} from 'react-hook-form';
import {TSignIn} from '@/types/authTypes';
import {authServices} from '@/services/auth.service';
import Button from '@/components/elements/Button';
import {useRouter} from 'next/navigation';
import LOCAL_STORAGE_KEYS from '@/lib/constants/localStorageKeys';

const LoginForm = () => {
    const methods = useForm()
    const router = useRouter()

    const {register, handleSubmit} = methods

    const logger = async (obj: TSignIn) => {
        try {
            const data = await authServices.signIn(obj)

            if (data?.token) {
                localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, data.token)

                router.push('/')
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <form className='flex items-center flex-col gap-y-4' onSubmit={handleSubmit(logger)}>
            <input
                className='border border-green-400 h-10 w-full px-4 outline-none rounded-lg py-2 text-lg'
                {...register('email')}
                placeholder='Електронна пошта' type="text"
            />
            <input
                className='border border-green-400 h-10 w-full px-4 outline-none rounded-lg py-2 text-lg'
                {...register('password')}
                placeholder='Пароль' type="password"
            />
            <Button type='primary'>
                Підтвердити
            </Button>
        </form>
    );
};

export default LoginForm;
