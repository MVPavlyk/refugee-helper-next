'use client'

import React, {FC} from 'react';
import {TImage} from '@/types/tickerTypes';
import Image from 'next/image'
import getImageUrl from '@/lib/helpers/getImageUrl';
import {useDragScroll} from '@/lib/hooks/useDragScroll';

type TImagesGallery = {
    images: TImage[]
}

const ImagesGallery: FC<TImagesGallery> = ({images}) => {
    if (!images.length) return null;

    const [ref] = useDragScroll();

    return (
        <section ref={ref} className='w-full max-w-full overflow-x-auto flex items-center gap-x-6 mt-10 pb-2'>
            {images.map(image =>
                <Image
                    className='h-[300px] w-auto select-none'
                    draggable={false}
                    height={300}
                    width={600}
                    key={image.url}
                    src={getImageUrl(image.url)}
                />)
            }
        </section>
    );
};

export default ImagesGallery;
