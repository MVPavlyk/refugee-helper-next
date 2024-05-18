import React from 'react';
import {THelpTicket} from '@/types/tickerTypes';
import Link from 'next/link';

const HelpTicketCard = ({ticket}: { ticket: THelpTicket }) => {
    const {id, title, description, createdAt} = ticket

    return (
        <Link
            className='border-2 hover:bg-gray-100 flex flex-col justify-between transition border-gray-400 p-4 rounded-2xl'
            href={`/ticket/${id}`}>

            <div className='flex flex-col gap-y-4 '>
                <h4 className='text-xl text-green-400'>{title}</h4>
                <p className='text'>{description}</p>
            </div>

            {new Date(createdAt).toLocaleTimeString('uk-UA') + "  " + new Date(createdAt).toLocaleDateString('uk-UA')}
        </Link>
    );
};

export default HelpTicketCard;
