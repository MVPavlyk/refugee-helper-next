import React from 'react';
import AuthLayout from '@/components/layouts/AuthLayout';
import CommonWrapper from '@/components/modules/CommonWrapper';
import LoginForm from '@/components/modules/LoginForm';

const Page = () => {
    return (
        <AuthLayout>
            <CommonWrapper>
                <h1 className='text-center text-2xl font-medium'>Логінація</h1>
                <LoginForm/>
            </CommonWrapper>
        </AuthLayout>
    );
};

export default Page;
