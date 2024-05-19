import React from 'react';
import {ticketsService} from '@/services/tickets.service';
import HelpTicketCard from '@/components/modules/HelpTicketsListing/HelpTicketCard';
import PagePagination from '@/components/units/PagePagination';
import PageFiltration from '@/components/units/PageFiltration';

export default async function HelpTicketsListing({searchParams}: { searchParams?: { [key: string]: string | string[] | undefined } }) {
    const {PageNumber = 1, PageSize = 12, Title = ''} = searchParams || {};

    const response = await ticketsService.search({PageNumber, PageSize, Title});

    const tickets = response.items

    return (
        <>
            <PageFiltration/>
            <section className='px-20 py-10 grid grid-cols-3 gap-4'>
                {!!tickets.length &&
                    tickets.map(ticket => <HelpTicketCard key={ticket.id} ticket={ticket}/>)
                }
            </section>
            <PagePagination response={response}/>
        </>
    );
}
