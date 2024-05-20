import React from 'react';
import {THelpTicket} from '@/types/tickerTypes';
import Link from 'next/link';
import formatDateTime from '@/lib/helpers/formatDateTime';
import TICKET_STATUSES from '@/lib/constants/ticketStatuses';
import cardStringCutter from '@/lib/helpers/cardStringCutter';

const HelpTicketCard = ({ticket}: { ticket: THelpTicket }) => {
    const {id, title, description, createdAt, status} = ticket

    return (
        <Link
            className='border-2 hover:bg-gray-100 flex flex-col justify-between gap-y-4 transition border-gray-400 p-4 rounded-2xl'
            href={`/ticket/${id}`}>

            <div className='flex flex-col gap-y-4 '>
                <h4 className='text-xl text-green-400'>{title}</h4>
                <p className='text'>{cardStringCutter(description)}</p>
            </div>

            <div className='flex items-center gap-x-4'>
                <div className='text-green-400'>
                    {TICKET_STATUSES[status]}
                </div>
                <div className='w-[1px] h-4 bg-green-400'/>
                <div className='text-blue-900'>{formatDateTime(createdAt)}</div>
            </div>
        </Link>
    );
};

export default HelpTicketCard;
