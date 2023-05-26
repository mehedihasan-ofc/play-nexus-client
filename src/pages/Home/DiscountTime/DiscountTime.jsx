import React from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';

const DiscountTime = () => {

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 60);

    return (
        <div className='bg-primary my-10 p-20'>
            <div className='text-center mb-5'>
                <h2 className='font-secondary text-white font-extrabold text-xl md:text-3xl'>15% Discount <br />
                    On All Police Car Toys</h2>
                <p className='mt-2 mb-5'>After this time the offer will start</p>
            </div>
                <FlipCountdown
                    endAt={endDate}
                    hideYear
                    hideMonth={false}
                    hideDay={false}
                    hideHour={false}
                    hideMinute={false}
                    hideSecond={false}
                />

            <div className='text-center mt-10'>
                <button className='bg-white rounded-full font-secondary text-base font-bold px-8 py-2'>Shop Now</button>
            </div>
        </div>
    );
};

export default DiscountTime;