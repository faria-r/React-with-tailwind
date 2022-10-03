import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const PriceOption = ({option}) => {
    return (
        <div className='bg-indigo-400 m-3 rounded p-6'>
            <div>
                <h3 className=''>
                    <span className='text-6xl font-bold text-white'>{option.price}</span>
                    <span className='text-xl font-bold text-white'>/Month</span>
                    </h3>
                <p className='text-3xl '>{option.name}</p>
            </div>
            <div className='flex items-center mt-3'>
                <CheckCircleIcon className='text-3xl  h-6 w-6  text-white bg-green-600'></CheckCircleIcon>
                <p className='ml-2'>Awesome Features</p>
            </div>
        </div>
    );
};

export default PriceOption;