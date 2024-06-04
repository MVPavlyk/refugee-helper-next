'use client'

import React, {useState} from 'react';
import {TComment} from '@/types/tickerTypes';
import Button from '@/components/elements/Button';
import CommentRow from '@/components/modules/CommentsBlock/CommentRow';
import {useForm} from 'react-hook-form';
import LOCAL_STORAGE_KEYS from '@/lib/constants/localStorageKeys';
import {ticketsService} from '@/services/tickets.service';

const CommentsBlock = (
    {
        comments: defaultComments,
        ticketId
    }: { comments: TComment[], ticketId: string }
) => {
    const token = typeof window !== 'undefined' ? window.localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN) : ''

    const [comments, setComments] = useState<TComment[]>(defaultComments)

    const methods = useForm()

    const {register, handleSubmit, reset} = methods

    const sendComment = (obj) => {
        const {text} = obj;

        ticketsService.addComment(ticketId, token, text).then(ticket => {
            console.log(ticket)
            setComments(ticket.comments)
            reset();
        })
    }

    return (
        <section className='w-full mt-10'>
            <div className='text-lg'>Коментарі:</div>
            <form onSubmit={handleSubmit(sendComment)} className='w-full flex gap-x-4 my-3'>
                <input {...register('text')} className='flex-1 border-b-2 border-gray-400 outline-none'
                       placeholder='Додати коментар'
                       type="text"/>
                <Button type='primary'>Надіслати</Button>
            </form>

            {!!comments?.length && comments.map(comment => <CommentRow comment={comment}/>)}
        </section>
    );
};

export default CommentsBlock;
