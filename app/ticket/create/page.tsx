import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import AddTicketForm from '@/components/modules/AddTicketForm';

const Page = () => {
    return (
        <PageLayout>
            <section className='px-20 py-10'>
                <AddTicketForm/>
            </section>
        </PageLayout>
    );
};

export default Page;
