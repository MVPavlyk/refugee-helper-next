import React from 'react';
import {TUser} from '@/types/authTypes';
import AvatarPlaceholder from '@/assets/icons/AvatarPlaceholder';
import getImageUrl from '@/lib/helpers/getImageUrl';
import Image from 'next/image'


const Avatar = ({url}: { url?: string }) => {
    return (
        <div className='w-12 h-12 border border-green-400 flex items-center justify-center rounded-full'>
            {url ?
                <div className='h-10 w-10 overflow-hidden flex items-center rounded-full'>
                    <Image width={40} height={40} className='w-10 rounded-full' src={getImageUrl(url)}/>
                </div>
                :
                <AvatarPlaceholder/>
            }
        </div>
    )
}

const User = ({user}: { user: TUser }) => {
    return (
        <div className='flex items-center gap-x-2'>
            <Avatar url={user.avatarUrl}/>
            <p>{user.firstName} {user.lastName}</p>
        </div>
    );
};

export default User;
