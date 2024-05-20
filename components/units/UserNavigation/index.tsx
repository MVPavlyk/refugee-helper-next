'use client'

import React, {useEffect, useState} from 'react';
import LinkAsButton from '@/components/elements/LinkAsButton';
import {TUser} from '@/types/authTypes';
import {authServices} from '@/services/auth.service';
import Button from '@/components/elements/Button';
import LOCAL_STORAGE_KEYS from '@/lib/constants/localStorageKeys';
import User from '@/components/units/User';
import Link from 'next/link';

const UserNavigation = () => {
    const [wait, setWait] = useState(true)

    const [user, setUser] = useState<TUser | null>(null)

    const token = typeof window !== 'undefined' ? window.localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN) : null

    const logout = () => {
        localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN)
        setUser(null)
    }

    useEffect(() => {
        if (token) {
            authServices.getUser(token).then(u => {
                setUser(u)
                setWait(false)
            })
        } else {
            setWait(false)
        }
    }, [token])

    if (wait) return <></>

    return (
        <div className='flex items-center gap-x-4'>
            {user?.id ?
                <>
                    <Link className='text-green-400' href='/ticket/create'>Створити запит</Link>
                    <User user={user}/>
                    <Button onClick={() => logout()} type='secondary'>Вихід</Button>
                </>
                :
                <>
                    <LinkAsButton type='secondary' href='/sign-up'>
                        Реєстрація
                    </LinkAsButton>
                    <LinkAsButton type='primary' href='/sign-in'>
                        Вхід
                    </LinkAsButton>
                </>
            }
        </div>
    )
};

export default UserNavigation;
