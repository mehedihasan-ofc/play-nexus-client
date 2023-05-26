import React, { useContext } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';

const ToyDetails = () => {

    const { setPreloader } = useContext(AuthContext);
    const loadedToy = useLoaderData();
    const navigation = useNavigation();
    useSetTitle('Toy Details');

    if (navigation.state === 'idle') {
        setPreloader(false);
    }

    const { toyImg, toyName, sellerName, sellerEmail, price, rating, availableQuantity, toyDescription } = loadedToy;

    return (
        <div className='my-container my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
                <div className='w-96 mx-auto shadow-md'>
                    <img src={toyImg} alt={toyName} />
                </div>
                <div className="text-center md:text-left mt-4 md:mt-0">
                    <h2 className="text-4xl font-bold">{toyName}</h2>
                    <p className="text-base text-gray-700 my-2">Sold by: {sellerName}</p>
                    <p className="text-base text-gray-700">Contact: {sellerEmail}</p>
                    <p className="text-base text-green-600 my-2">Price: ${price}</p>
                    <p className="text-base text-gray-700">Rating: {rating}</p>
                    <p className="text-base text-gray-700 mt-2">Available Quantity: {availableQuantity}</p>
                    <p className="text-base text-gray-700 mt-2 leading-loose">Description: {toyDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;