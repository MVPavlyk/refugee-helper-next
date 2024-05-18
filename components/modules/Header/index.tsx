import React from 'react';
import Logo from '@/components/Elements/Logo';
import LinkAsButton from '@/components/elements/LinkAsButton';

const Header = () => {
    return (
        <header
            className='h-20 bg-white flex items-center justify-between w-full border-b-2 border-gray-400 px-20 fixed top-0 left-0'>
            <Logo/>
            <div className='flex items-center gap-x-4'>
                <LinkAsButton type='secondary' href='/sign-up'>
                    Реєстрація
                </LinkAsButton>
                <LinkAsButton type='primary' href='/sign-in'>
                    Вхід
                </LinkAsButton>
            </div>
        </header>
    );
};

export default Header;
