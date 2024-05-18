import React from 'react';
import CommonWrapper from '@/components/modules/CommonWrapper';
import RegistrationForm from '@/components/modules/RegistrationForm';
import AuthLayout from '@/components/layouts/AuthLayout';

const Page = () => {
    return (
        <AuthLayout>
            <CommonWrapper>
                <h1 className='text-center text-2xl font-medium'>Реєстрація</h1>
                <RegistrationForm/>
            </CommonWrapper>
        </AuthLayout>
    );
};

export default Page;
