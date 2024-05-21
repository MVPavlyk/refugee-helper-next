'use client'

import React, {useCallback, useEffect, useState} from 'react';
import {useDebouncer} from '@/lib/hooks/useDebouncer';
import {usePathname, useSearchParams, useRouter} from 'next/navigation';

const PageFiltration = ({searchCase}: { searchCase: 'ticket' | 'user' }) => {
    const searchParams = useSearchParams()

    const searchParameter = searchCase === 'ticket' ? 'Title' : 'Name'


    const paramsTitle = searchParams.get(searchParameter) || ''

    const [value, setValue] = useState(String(paramsTitle))

    const debouncedValue = useDebouncer(value, 400)

    const router = useRouter()
    const pathname = usePathname()


    const createQueryString = useCallback(
        (name: string, value: string) => {
            if (!value) return ''

            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    useEffect(() => {
        if (debouncedValue.length || paramsTitle.length) {
            router.push(pathname + '?' + createQueryString(searchParameter, debouncedValue))
        }
    }, [debouncedValue])


    console.log(debouncedValue)

    return (
        <section className='w-full h-12 border-b border-gray-400 px-20 flex items-center justify-between'>
            <div/>
            <input className='text-lg outline-none border-b-2 border-green-400' placeholder='Пошук' type="text"
                   value={value} onChange={(e) => setValue(e.target.value)}/>
        </section>
    );
};

export default PageFiltration;
