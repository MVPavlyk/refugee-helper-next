import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import DashboardListing from '@/components/modules/DashboardListing';

const Page = ({}) => {
    return (
        <PageLayout>
            <section className='px-20 py-10'>
                <DashboardListing/>
            </section>
        </PageLayout>
    );
};

export default Page;
