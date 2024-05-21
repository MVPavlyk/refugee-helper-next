'use client'

import React, {useEffect, useState} from 'react';
import {TUser} from '@/types/authTypes';
import Avatar from '@/components/units/Avatar';
import Select from 'react-select';
import USER_ROLES from '@/lib/constants/userRoles';
import {userService} from '@/services/user.service';
import USER_ROLES_CODE from '@/lib/constants/userRolesCode';
import LOCAL_STORAGE_KEYS from '@/lib/constants/localStorageKeys';

const UserRow = ({user}: { user: TUser }) => {
    const token = typeof window !== 'undefined' ? window.localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN) : null

    const [userRole, setUserRole] = useState({label: user.role, value: user.role})

    const [isFirst, setIsFirst] = useState(true)

    const options = Object.values(USER_ROLES).map(role => ({label: role, value: role}));

    useEffect(() => {
        if (isFirst) return setIsFirst(false)

        userService.patchRole(user.id, USER_ROLES_CODE[userRole.label], token)
    }, [userRole])

    return (
        <div className='w-full h-12 border-b border-green-400 grid grid-cols-2 hover:bg-gray-100 cursor-pointer'>
            <div className='flex items-center gap-x-4'>
                <Avatar size='sm' url={user.avatarUrl}/>
                <p>{user.firstName} {user.lastName}</p>
            </div>
            <Select
                className='w-[200px]'
                value={userRole}
                onChange={(e) => setUserRole(e)}
                options={options}
            />
        </div>
    );
};

export default UserRow;
