import React from 'react';
import {ticketsService} from '@/services/tickets.service';
import HelpTicketCard from '@/components/modules/HelpTicketsListing/HelpTicketCard';

export default async function HelpTicketsListing() {
    const tickets = await ticketsService.getAll();

    return (
        <section className='px-20 py-10 grid grid-cols-3 gap-4'>
            {!!tickets.length &&
                tickets.map(ticket => <HelpTicketCard key={ticket.id} ticket={ticket}/>)
            }
        </section>
    );
}
