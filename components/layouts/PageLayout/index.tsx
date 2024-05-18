import React, {ReactNode} from 'react';
import Header from '@/components/modules/Header';

const PageLayout = ({children}: { children: ReactNode }) => {
    return (
        <section className='pt-20'>
            <Header/>
            {children}
        </section>
    );
};

export default PageLayout;
