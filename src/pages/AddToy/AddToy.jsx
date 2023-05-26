import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigation } from 'react-router-dom';
import useSetTitle from '../../hooks/useSetTitle';

const AddToy = () => {
    const { user, setPreloader } = useContext(AuthContext);
    useSetTitle('Add Toy');

    const navigation = useNavigation()

    if (navigation.state === 'idle') {
        setPreloader(false);
    }

    // submit function
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const toyName = form.toyName.value;
        const toyImg = form.toyImg.value;
        const price = parseFloat(form.price.value);
        const rating = form.rating.value;
        const sellerName = form.sellerName.value;
        const subCategory = form.subCategory.value;
        const availableQuantity = form.availableQuantity.value;
        const sellerEmail = form.sellerEmail.value;
        const toyDescription = form.toyDescription.value;

        const newToy = {
            toyName,
            toyImg,
            price,
            rating,
            sellerName,
            subCategory,
            availableQuantity,
            sellerEmail,
            toyDescription,
        };

        // send new toy data to server
        fetch(`https://play-nexus-server.vercel.app/add-toy`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newToy),
        })
            .then((res) => res.json())
            .then((data) => {
                setPreloader(false)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    });
                }
            });
    };

    return (
        <div className="my-container my-10">
            <div className='shadow-md p-5'>
                <h2 className="text-3xl text-center font-bold mb-4">Add A Toy</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="border border-gray-300 px-4 py-2 w-full"
                            placeholder="Enter the toy's name"
                            required
                            name='toyName'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pictureUrl" className="block font-medium mb-1">
                            Picture URL of the toy
                        </label>
                        <input
                            type="url"
                            id="pictureUrl"
                            className="border border-gray-300 px-4 py-2 w-full"
                            placeholder="Enter the picture URL"
                            required
                            name='toyImg'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerName" className="block font-medium mb-1">
                            Seller Name
                        </label>
                        <input
                            type="text"
                            id="sellerName"
                            className="border border-gray-300 px-4 py-2 w-full"
                            defaultValue={user?.displayName ? user?.displayName : ''}
                            placeholder="Enter the seller's name"
                            name='sellerName'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerEmail" className="block font-medium mb-1">
                            Seller Email
                        </label>
                        <input
                            type="email"
                            id="sellerEmail"
                            className="border border-gray-300 px-4 py-2 w-full"
                            defaultValue={user?.email ? user?.email : ''}
                            placeholder="Enter the seller's email"
                            name='sellerEmail'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subCategory" className="block font-medium mb-1">
                            Sub-category
                        </label>
                        <select
                            id="subCategory"
                            className="border border-gray-300 px-4 py-2 w-full"
                            required
                            name='subCategory'
                        >
                            <option value="">Select a sub-category</option>
                            <option value="Sports Car">Sports Car</option>
                            <option value="Truck">Truck</option>
                            <option value="Police Car">Police Car</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block font-medium mb-1">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            className="border border-gray-300 px-4 py-2 w-full"
                            placeholder="Enter the toy's price"
                            required
                            name='price'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rating" className="block font-medium mb-1">
                            Rating
                        </label>
                        <input
                            type="number"
                            id="rating"
                            className="border border-gray-300 px-4 py-2 w-full"
                            placeholder="Enter the toy's rating"
                            name='rating'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block font-medium mb-1">
                            Available Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            className="border border-gray-300 px-4 py-2 w-full"
                            placeholder="Enter the available quantity"
                            required
                            name='availableQuantity'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block font-medium mb-1">
                            Toy Description
                        </label>
                        <textarea
                            id="description"
                            className="border border-gray-300 px-4 py-2 w-full"
                            placeholder="Enter toy's description"
                            required
                            name='toyDescription'
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Add Toy
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;