import React, {ReactNode} from 'react';

const CommonWrapper = ({children}: { children: ReactNode }) => {
    return (
        <section
            className='w-full min-h-[calc(100vh-120px)] lg:py-4 py-2.5 px-4 flex items-center justify-center'
        >
            <div
                className='2xl:w-156 xl:w-137 lg:w-156 md:w-115 w-full h-fit flex flex-col gap-y-4 justify-center bg-white rounded-3xl border border-solid border-gray-400  2xl:py-12 xl:px-24 lg:px-20 lg:py-12 md:px-14 md:py-12 py-6 px-4'
            >
                {children}
            </div>
        </section>
    );
};

export default CommonWrapper;
