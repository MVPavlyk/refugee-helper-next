'use client'

import React, {useCallback, useEffect, useState} from 'react';
import {TUser} from '@/types/authTypes';
import LOCAL_STORAGE_KEYS from '@/lib/constants/localStorageKeys';
import {authServices} from '@/services/auth.service';
import {TPaginator, TSearchObj} from '@/types/tickerTypes';
import {ticketsService} from '@/services/tickets.service';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import PagePagination from '@/components/units/PagePagination';
import TicketRow from '@/components/modules/DashboardListing/TicketRow';
import Button from '@/components/elements/Button';

const DashboardListing = () => {
    const searchParams = useSearchParams()

    const type = searchParams.get('type') || 'user'

    const PageNumber = searchParams.get('PageNumber') || 1;

    const PageSize = searchParams.get('PageSize') || 12;

    const [ticketsResponse, setTicketsResponse] = useState<TPaginator>()

    const tickets = ticketsResponse?.items

    const [user, setUser] = useState<TUser | null>(null)

    const token = typeof window !== 'undefined' ? window.localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN) : ''

    const router = useRouter()
    const pathname = usePathname()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )


    useEffect(() => {
        if (token) {
            authServices.getUser(token).then(u => {
                setUser(u)
            })
        }
    }, [token])


    useEffect(() => {
        if (user?.id) {
            const searchObj: TSearchObj =
                {
                    PageNumber,
                    PageSize,
                }

            if (type === 'user') {
                searchObj.UserIds = user?.id
            } else {
                searchObj.VolunteerIds = user?.id
            }

            ticketsService.search(searchObj).then(t => setTicketsResponse(t))
        }
    }, [user, PageSize, PageNumber, type])

    if (!ticketsResponse) return null

    return (
        <div className='flex flex-col gap-y-4'>
            {user?.role === 'Volunteer' &&
              <Button onClick={() => {
                  router.push(pathname + '?' + createQueryString('type', type === 'user' ? 'volunteer' : 'user'))
              }} type='primary'>{type === 'user' ? 'Перемкнути на волонтерські' : 'Перемкнути на власні'}</Button>}
            {tickets?.map(ticket => <TicketRow key={ticket.id} ticket={ticket} user={user!} token={token}/>)}
            <PagePagination response={ticketsResponse}/>
        </div>

    );
};

export default DashboardListing;
