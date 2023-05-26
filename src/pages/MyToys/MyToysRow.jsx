import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyToysRow = ({ myToy, handleDelete }) => {

    const { _id, toyImg, toyName, subCategory, availableQuantity, rating, price } = myToy;
    const navigate = useNavigate();

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={toyImg} alt={toyName} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50">{subCategory}</div>
                    </div>
                </div>
            </td>
            <td>
                {availableQuantity}
            </td>
            <td>{rating}</td>
            <td>${price}</td>
            <th>
                <button onClick={() => navigate(`/update/${_id}`)} className="btn btn-outline btn-success btn-xs">Update</button>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-error text-white btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyToysRow;