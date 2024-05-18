import React from 'react';
import Link from 'next/link';
import LogoMain from '@/assets/icons/LogoMain';

const Logo = () => {
    return (
        <Link href='/'>
            <LogoMain/>
        </Link>
    );
};

export default Logo;
