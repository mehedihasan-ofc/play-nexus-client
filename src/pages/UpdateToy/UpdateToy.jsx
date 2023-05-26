import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AuthContext } from '../../providers/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';

const UpdateToy = () => {

    const loadedToy = useLoaderData();
    const { setPreloader } = useContext(AuthContext);
    useSetTitle('Update Toy');

    const navigation = useNavigation()

    if (navigation.state === 'idle') {
        setPreloader(false);
    }

    const { _id, price, availableQuantity, toyDescription } = loadedToy;

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const updatePrice = parseFloat(form.updatePrice.value);
        const updateQuantity = form.updateQuantity.value;
        const updateToyDescription = form.updateToyDescription.value;

        const updateToy = { updatePrice, updateQuantity, updateToyDescription };
        console.log(updateToy);

        // send data to the server
        fetch(`https://play-nexus-server.vercel.app/update/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount) {
                    setPreloader(false);
                    Swal.fire({
                        title: 'success',
                        text: 'Toy updated successful',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    };

    return (
        <div className='my-container my-10'>
            <div className="shadow-md p-5">
                <h1 className="text-2xl text-center font-bold mb-4">Update Toy</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            type="text"
                            id="price"
                            defaultValue={price}
                            name='updatePrice'
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
                            Available Quantity
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            type="text"
                            id="quantity"
                            defaultValue={availableQuantity}
                            name='updateQuantity'
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                            Detail Description
                        </label>
                        <textarea
                            className="w-full h-28 border border-gray-300 rounded-md px-5 py-2"
                            id="description"
                            defaultValue={toyDescription}
                            name='updateToyDescription'
                        />
                    </div>
                    <div className="modal-action">
                        <button htmlFor="my-modal-6"
                            className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-md"
                            type="submit"
                        >
                            Update Toy
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;