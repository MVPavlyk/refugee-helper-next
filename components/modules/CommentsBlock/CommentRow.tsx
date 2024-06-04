import React, {useEffect, useState} from 'react';
import {TComment} from '@/types/tickerTypes';
import {TUser} from '@/types/authTypes';
import User from '@/components/units/User';
import {userService} from '@/services/user.service';
import formatDateTime from '@/lib/helpers/formatDateTime';

const CommentRow = ({comment}: { comment: TComment }) => {
    const {text, userId, createdDate} = comment

    const [user, setUser] = useState<TUser | null>(null)

    useEffect(() => {
        if (userId) {
            userService.getUserById(userId).then(v => setUser(v))
        }
    }, [userId])

    return (
        <div className='w-full p-4 flex flex-col gap-y-4 border border-gray-400 '>
            <div className='flex items-center gap-x-4'>{user && <User user={user}/>} <p
                className='text-blue-900'>{formatDateTime(createdDate)}</p></div>
            <p>
                {text}
            </p>
        </div>
    );
};

export default CommentRow;
