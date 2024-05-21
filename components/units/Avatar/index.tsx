import getImageUrl from '@/lib/helpers/getImageUrl';
import AvatarPlaceholder from '@/assets/icons/AvatarPlaceholder';
import React from 'react';

const Avatar = ({url, size}: { url?: string, size: 'sm' | 'lg' }) => {
    if (size === 'sm') {
        return (
            <div className='w-6 h-6 border border-green-400 flex items-center justify-center rounded-full'>
                {url ?
                    <div className='h-5 w-5 overflow-hidden flex items-center rounded-full'>
                        <Image width={20} height={20} className='w-5 rounded-full' src={getImageUrl(url)}/>
                    </div>
                    :
                    <AvatarPlaceholder/>
                }
            </div>
        )
    }

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

export default Avatar;
