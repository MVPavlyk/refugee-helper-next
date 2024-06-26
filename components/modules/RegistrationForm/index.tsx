'use client'

import React from 'react';
import {useForm} from 'react-hook-form';
import {TSignUp} from '@/types/authTypes';
import {authServices} from '@/services/auth.service';

import { useRouter } from 'next/navigation'
import Button from '@/components/elements/Button';


const RegistrationForm = () => {
    const router = useRouter()

    const methods = useForm()

    const {register, handleSubmit} = methods

    const logger = async (obj: TSignUp) => {
        const data = await authServices.signUp(obj)

        if(data.id) {
            router.push('/sign-in?after-registration=true')
        }
    }

    return (
        <form className='flex items-center flex-col gap-y-4' onSubmit={handleSubmit(logger)}>
            <input
                className='border border-green-400 h-10 w-full px-4 outline-none rounded-lg py-2 text-lg'
                {...register('firstName')}
                placeholder="Ім'я" type="text"
            />
            <input
                className='border border-green-400 h-10 w-full px-4 outline-none rounded-lg py-2 text-lg'
                {...register('lastName')}
                placeholder='Прізвище' type="text"
            />
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

export default RegistrationForm;
