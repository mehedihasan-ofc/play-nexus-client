import React from 'react';
import Facility1 from '../../../assets/facility/facility1.png';
import Facility2 from '../../../assets/facility/facility2.png';
import Facility3 from '../../../assets/facility/facility3.png';
import Facility4 from '../../../assets/facility/facility4.png';

const Facility = () => {
    return (
        <div className='my-container flex flex-col md:flex-row justify-between items-center gap-5 my-10'>
            <div className='w-full text-center border shadow-md px-7 py-10 hover:-translate-y-2 cursor-pointer transition duration-200 transform'>
                <div className='w-14 mx-auto'>
                    <img className='w-full' src={Facility1} alt="" />
                </div>
                <h4 className='font-secondary text-lg mb-1 font-extrabold'>Free Shipping</h4>
                <p className='text-sm'>No-cost delivery of products.</p>
            </div>
            <div className='w-full text-center border shadow-md px-7 py-10 hover:-translate-y-2 cursor-pointer transition duration-200 transform'>
                <div className='w-14 mx-auto'>
                    <img className='w-full' src={Facility2} alt="" />
                </div>
                <h4 className='font-secondary text-lg mb-1 font-extrabold'>Gift Voucher</h4>
                <p className='text-sm'>Prepaid card for gifting.</p>
            </div>
            <div className='w-full text-center border shadow-md px-7 py-10 hover:-translate-y-2 cursor-pointer transition duration-200 transform'>
                <div className='w-14 mx-auto'>
                    <img className='w-full' src={Facility3} alt="" />
                </div>
                <h4 className='font-secondary text-lg mb-1 font-extrabold'>Support 24/7</h4>
                <p className='text-sm'>24/7 customer support available.</p>
            </div>
            <div className='w-full text-center border shadow-md px-7 py-10 hover:-translate-y-2 cursor-pointer transition duration-200 transform'>
                <div className='w-14 mx-auto'>
                    <img className='w-full' src={Facility4} alt="" />
                </div>
                <h4 className='font-secondary text-lg mb-1 font-extrabold'>Money Return</h4>
                <p className='text-sm'>Refunds for returned purchases.</p>
            </div>
        </div>
    );
};

export default Facility;