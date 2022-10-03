import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [

{id:1, name: 'free',price:0,features:[
'Awesome Feature','Extra-ordinary Feature','Unneccessary Feature','Never Use Feature', 'Ajaira Feature','Hudai Feature'
]},
{id:2, name: 'Medium',price:100,features:[
    'Awesome Feature','Extra-ordinary Feature','Unneccessary Feature','Never Use Feature', 'Ajaira Feature','Hudai Feature'
    ]},
{id:3, name: 'Premium',price:200,features:[
    'Awesome Feature','Extra-ordinary Feature','Unneccessary Feature','Never Use Feature', 'Ajaira Feature','Hudai Feature'
    ]},

    ];
    return (
        <div>
             <h1 className='text-xl font-bold bg-indigo-400 p-12 text-white'>Best Pricing in the town</h1>
            <div className='grid md:grid-cols-3 gap-3'>
            {
                pricingOptions.map(option => <PriceOption 
                    key={option.id}
                    option = {option}
                ></PriceOption>)
             }
            </div>
        </div>
    );
};

export default Pricing;
