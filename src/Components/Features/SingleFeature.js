import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const SingleFeature = ({feature}) => {
    return (
        <div className='flex items-center mt-3'>
                <CheckCircleIcon className='text-3xl  h-6 w-6  text-white bg-green-600'></CheckCircleIcon>
                <p className='ml-2'>{feature}</p>
            </div>
    );
};

export default SingleFeature;