'use client'

import React, {useCallback} from 'react';
import {TPaginator} from '@/types/tickerTypes';
import {twMerge} from 'tailwind-merge'
import {usePathname, useRouter, useSearchParams} from 'next/navigation';


const PagePagination = ({response}: { response: TPaginator }) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )


    const {pageNumber, totalPages} = response

    if(totalPages <= 1) return <></>

    const buttons = Array.from(
        new Set([1, pageNumber, pageNumber + 1, pageNumber - 1, totalPages]),
    )
        .sort((a, b) => a - b)
        .filter((el) => !!el && el <= totalPages)
        .map((el, idx, arr) =>
            arr[idx + 1] === el + 1 || el === totalPages ? el : [el, "..."],
        )
        .flat();


    const goToPage = (number: number) => {
        if (number !== pageNumber) {
            router.push(pathname + '?' + createQueryString('PageNumber', String(number)))
        }
    }

    return (
        <div className='w-full flex items-center text-center justify-center gap-x-2'>
            {buttons.map(el => {
                if (el === '...') return <div className='text-green-400'>...</div>

                return (
                    <button
                        key={el}
                        onClick={() => goToPage(el)}
                        className={twMerge('min-w-8 border border-green-400 rounded-lg bg-transparent', el === pageNumber ? 'bg-green-400 text-white cursor-default' : '')}>
                        {el}
                    </button>
                )
            })}
        </div>
    );
};

export default PagePagination;
