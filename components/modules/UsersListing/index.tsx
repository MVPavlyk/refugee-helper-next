import React from 'react';
import PageFiltration from '@/components/units/PageFiltration';
import PagePagination from '@/components/units/PagePagination';
import {userService} from '@/services/user.service';
import UserRow from '@/components/modules/UsersListing/UserRow';

const UsersListing = async ({searchParams}: { searchParams?: { [key: string]: string | string[] | undefined } }) => {
    const {PageNumber = 1, PageSize = 12, Name = ''} = searchParams || {};

    const response = await userService.search({PageNumber, PageSize, Name});

    const users = response.items

    return (
        <>
            <PageFiltration searchCase='user'/>
            <section className='px-20 py-10 flex flex-col gap-4'>
                {users.map(user => <UserRow user={user} key={user.id}/>)}
            </section>
            <PagePagination response={response}/>
        </>
    );
};

export default UsersListing;
