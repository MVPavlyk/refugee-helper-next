import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import HelpTicketsListing from '@/components/modules/HelpTicketsListing'

const Page = ({searchParams}: {searchParams?: { [key: string]: string | string[] | undefined }}) => {
    return (
        <PageLayout>
            <HelpTicketsListing searchParams={searchParams}/>
        </PageLayout>
    );
};

export default Page;
