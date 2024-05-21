import React from 'react';
import {THelpTicket} from '@/types/tickerTypes';
import {TUser} from '@/types/authTypes';
import formatDateTime from '@/lib/helpers/formatDateTime';
import TICKET_STATUSES from '@/lib/constants/ticketStatuses';
import HandleBlock from '@/components/modules/TicketView/HandleBlock';
import Link from 'next/link';
import {ticketsService} from '@/services/tickets.service';

const TicketRow = ({ticket, user, token}: { ticket: THelpTicket, user: TUser, token: string }) => {
    const {title, createdAt, status} = ticket

    const imVolunteer = ticket.volunteerId === user.id;

    const deleteTicket = (e) => {
        e.stopPropagation()

        ticketsService.delete(ticket.id, token).then(v => {
            if (v.status === 200) {
                window.location.reload()
            }
        })
    }

    return (
        <Link href={`/ticket/${ticket.id}`}
              className='w-full min-h-12 border-b border-green-400 grid grid-cols-5 items-center hover:bg-gray-100 cursor-pointer'>
            <div>{title}</div>
            <div>{formatDateTime(createdAt)}</div>
            <div>
                {TICKET_STATUSES[status]}
            </div>
            {imVolunteer ? <HandleBlock ticket={ticket}/> :
                <button onClick={deleteTicket}
                        className='px-2 w-fit bg-red-400 text-white border-none'>Видалити</button>}
        </Link>
    );
};

export default TicketRow;
