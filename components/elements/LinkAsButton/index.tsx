import React, {ReactNode} from 'react';
import Link from 'next/link';

type TLinkAsButton = {
    children: ReactNode,
    type: 'primary' | 'secondary',
    href: string
}

const LinkAsButton = ({children, type = 'primary', href}: TLinkAsButton) => {
    let style: string

    switch (type) {
        case 'secondary':
            style = 'h-10 w-fit border-2 border-green-400 bg-white flex items-center text-green-400 hover:bg-green-400 hover:text-white transition rounded-2xl text-lg px-10'
            break;
        default:
            style = 'h-10 w-fit border-2 border-green-400 bg-green-400 flex items-center text-white rounded-2xl text-lg px-10 hover:bg-white transition hover:text-green-400 '
    }

    return (
        <Link href={href} className={style}>
            {children}
        </Link>
    );
};

export default LinkAsButton;
