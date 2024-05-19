import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import {notFound} from 'next/navigation';
import {ticketsService} from '@/services/tickets.service';
import TicketView from '@/components/modules/TicketView';

const Page = async ({params}: { params: { ticketId: string } }) => {
    const {ticketId} = params

    if (!ticketId) return notFound()

    const ticket = await ticketsService.getOne(ticketId)

    if (!ticket) return notFound();

    return (
        <PageLayout>
            <TicketView ticket={ticket}/>
        </PageLayout>
    );
};

export default Page;
