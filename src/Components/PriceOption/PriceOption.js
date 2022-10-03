import React from 'react';
import SingleFeature from '../Features/SingleFeature';


const PriceOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-indigo-400 m-3 rounded p-6'>
            <div>
                <h3 className=''>
                    <span className='text-6xl font-bold text-white'>{option.price}</span>
                    <span className='text-xl font-bold text-white'>/Month</span>
                    </h3>
                <p className='text-3xl '>{option.name}</p>
            </div>
            {
                features.map((feature,idx) => <SingleFeature 
                key={idx} 
                feature={feature}
                ></SingleFeature>)
            }
            <button className='bg-green-700 w-full py-2 font-bold text-white  rounded hover:bg-blue-600 duration-1000 ease-in mt-2'>Buy Now</button>
        </div>
    );
};

export default PriceOption;