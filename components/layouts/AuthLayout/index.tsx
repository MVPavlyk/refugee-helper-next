import React, {ReactNode} from 'react';
import Logo from '@/components/elements/Logo';

const AuthLayout = ({children}: { children: ReactNode }) => {
    return (
        <section className='w-full min-h-screen bg-gray-100'>
            <div className='w-full h-28 flex items-center justify-center'>
                <Logo/>
            </div>
            {children}
        </section>
    );
};

export default AuthLayout;
