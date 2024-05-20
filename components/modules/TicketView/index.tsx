import React from 'react';
import {THelpTicket} from '@/types/tickerTypes';
import formatDateTime from '@/lib/helpers/formatDateTime';
import User from '@/components/units/User';
import TICKET_STATUSES from '@/lib/constants/ticketStatuses';
import ImagesGallery from '@/components/units/ImagesGallery';

const TicketView = ({ticket}: { ticket: THelpTicket }) => {
    const {title, description, status, createdAt, user, images} = ticket;

    return (
        <section className='px-20 py-10'>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-y-3'>
                    <h1 className='text-[40px] text-green-400'>{title}</h1>
                    <div className='flex items-center gap-x-4'>
                        <div className='text-blue-900'>{formatDateTime(createdAt)}</div>
                        <div className='w-[1px] h-4 bg-green-400'/>
                        <div className='text-green-400'>
                            {TICKET_STATUSES[status]}
                        </div>
                    </div>
                </div>
                {user && <User user={user}/>}
            </div>
            <p className='text-2xl mt-10 whitespace-pre-line'>{description}</p>
            <ImagesGallery images={images}/>
        </section>
    );
};

export default TicketView;
