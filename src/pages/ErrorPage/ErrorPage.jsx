import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import ErrorImg from '../../assets/error.png';

const ErrorPage = () => {

    const { error } = useRouteError();

    return (
        <section className='flex items-center h-screen p-16 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='w-full md:w-96 mb-5'>
                    <img src={ErrorImg} alt="" />
                </div>
                <div className='max-w-md text-center'>
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-6 py-2 transition duration-200 md:px-8 md:py-3 font-semibold rounded bg-primary shadow-lg text-white hover:bg-sky-600'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;