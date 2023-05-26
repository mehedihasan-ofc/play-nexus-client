import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const TableRow = ({ toy, _idx }) => {

    const { user } = useContext(AuthContext);
    const { _id, sellerName, toyName, subCategory, price, availableQuantity } = toy;
    const navigate = useNavigate();

    // view toy details handler
    const handleDetailsClick = (id) => {
        if (!user) {
            Swal.fire({
                title: 'Oops...',
                text: "You have to log in first to view details",
                icon: 'error',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(`/toy/${id}`)
                }
            })
        }
        else {
            navigate(`/toy/${_id}`)
        }
    }

    return (
        <tr>
            <th>{_idx + 1}.</th>
            <td>{sellerName ? sellerName : ''}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td>{availableQuantity}</td>
            <td><button onClick={() => handleDetailsClick(_id)} className="bg-primary font-bold text-white px-3 py-2 text-sm rounded-md my-2">View Details</button></td>
        </tr>
    );
};

export default TableRow;