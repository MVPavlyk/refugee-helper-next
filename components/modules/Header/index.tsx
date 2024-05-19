import React from 'react';
import Logo from '@/components/Elements/Logo';
import UserNavigation from '@/components/units/UserNavigation';

const Header = async () => {
    return (
        <header
            className='h-20 bg-white flex items-center justify-between w-full border-b-2 border-gray-400 px-20 fixed top-0 left-0'>
            <Logo/>
            <UserNavigation/>
        </header>
    );
};

export default Header;
