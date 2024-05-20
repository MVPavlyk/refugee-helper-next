'use client'

import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/navigation';
import LOCAL_STORAGE_KEYS from '@/lib/constants/localStorageKeys';
import {ticketsService} from '@/services/tickets.service';
import Button from '@/components/elements/Button';

const AddTicketForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const token = typeof window !== 'undefined' ? window.localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN) : null

    const methods = useForm()
    const router = useRouter()

    const {register, handleSubmit} = methods

    const formSubmit = async (obj) => {
        if (isLoading) return;

        setIsLoading(true)

        const {Title, Description, images} = obj || {}

        const formData = new FormData();

        formData.append('Title', Title)
        formData.append('Description', Description)

        for (let i = 0; i < images?.length; i++) {
            formData.append('images', images[i])
        }

        const res = await ticketsService.createTicket(formData, token)

        if (res?.id) {
            router.push(`/ticket/${res.id}`)
        }

        setIsLoading(false)
    }

    return (
        <form className='flex flex-col items-center gap-y-6' onSubmit={handleSubmit(formSubmit)}>
            <input
                type="text"
                className='border border-green-400 h-10 w-full px-4 outline-none rounded-lg py-2 text-lg'
                placeholder='Заголовок'
                {...register('Title')}
            />
            <textarea
                rows={6}
                className='border border-green-400 resize-none w-full px-4 outline-none rounded-lg py-2 text-lg'
                placeholder='Опис'
                {...register('Description')}
            />
            <input type="file" multiple {...register('images')}/>


            <Button type='primary'>{isLoading ? 'Зачекайте' : 'Надіслати'}</Button>
        </form>
    );
};

export default AddTicketForm;
