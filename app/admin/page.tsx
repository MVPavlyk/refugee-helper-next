import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import UsersListing from '@/components/modules/UsersListing';

const Page = ({searchParams}: { searchParams?: { [key: string]: string | string[] | undefined } }) => {


    return (
        <PageLayout>
            <UsersListing searchParams={searchParams}/>
        < /PageLayout>
    );
};

export default Page;
