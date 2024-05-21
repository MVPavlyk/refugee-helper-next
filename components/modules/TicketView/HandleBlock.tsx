'use client'

import React, {useEffect, useState} from 'react';
import {THelpTicket} from '@/types/tickerTypes';
import LOCAL_STORAGE_KEYS from '@/lib/constants/localStorageKeys';
import {TUser} from '@/types/authTypes';
import USER_ROLES from '@/lib/constants/userRoles';
import {authServices} from '@/services/auth.service';
import Button from '@/components/elements/Button';
import {ticketsService} from '@/services/tickets.service';
import TICKET_STATUSES from '@/lib/constants/ticketStatuses';
import Select from 'react-select';

const HandleBlock = ({ticket}: { ticket: THelpTicket }) => {
    const statusOptions = Object.entries(TICKET_STATUSES).map(([key, value]) => ({label: value, value: key}))

    const {status: defaultStatus, volunteerId} = ticket;

    const [isFirst, setIsFirst] = useState(true)

    const [status, setStatus] = useState({label: TICKET_STATUSES[defaultStatus], value: defaultStatus})

    const [wait, setWait] = useState(true)

    const [user, setUser] = useState<TUser | null>(null)

    const isVolunteer = user?.role === USER_ROLES.VOLUNTEER

    const token = typeof window !== 'undefined' ? window.localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN) : ''

    useEffect(() => {
        if (isFirst) return setIsFirst(false)

        setWait(true)

        ticketsService.changeStatus(ticket.id, token, status.value).then(res => {
            if (res?.status === 200) {
                return window.location.reload()
            }

            setWait(false)
        })
    }, [status])

    const assign = async () => {
        if (wait) return

        setWait(true)

        ticketsService.assign(ticket.id, token).then(res => {
            if (res.status === 200) {
                window.location.reload()
            }
            setWait(false)
        })

    }

    const unassign = async () => {
        if (wait) return
        setWait(true)

        ticketsService.unassign(ticket.id, token).then(res => {
            if (res.status === 200) {
                window.location.reload()
            }

            setWait(false)

        })
    }


    useEffect(() => {
        if (token) {
            authServices.getUser(token).then(u => {
                setUser(u)
                console.log(token, u)
                setWait(false)
            })
        } else {
            setWait(false)
        }
    }, [token])

    if ((user?.role && !isVolunteer) || defaultStatus === 2) return null;

    return (
        <div className='py-4'>
            {defaultStatus === 0 && !volunteerId &&
              <Button onClick={() => assign()} type='primary'>{wait ? 'Зачекайте' : 'Взяти в роботу'}</Button>}
            {volunteerId === user?.id &&
              <div className='flex items-center gap-x-4'>
                <Button type='primary' onClick={() => unassign()}>{wait ? 'Зачекайте' : 'Відмовитися'}</Button>

                <Select
                  className='w-[200px]'
                  value={status}
                  onChange={(e) => setStatus(e)}
                  options={statusOptions}
                />
              </div>}
        </div>
    );
};

export default HandleBlock;
