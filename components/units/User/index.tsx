import React from 'react';
import {TUser} from '@/types/authTypes';
import Avatar from '@/components/units/Avatar';

const User = ({user}: { user: TUser }) => {
    return (
        <div className='flex items-center gap-x-2'>
            <Avatar size='lg' url={user.avatarUrl}/>
            <p>{user.firstName} {user.lastName}</p>
        </div>
    );
};

export default User;
