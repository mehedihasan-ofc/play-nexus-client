import React, { useContext } from 'react';
import { Rating, Star } from '@smastrom/react-rating';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const ToyCard = ({ toy }) => {

    const { user } = useContext(AuthContext);
    const { _id, toyImg, toyName, price, rating } = toy;
    const navigate = useNavigate();

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9',
    };

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
        <div className="card w-full mb-5 md:mb-0 md:w-96 bg-base-100 shadow-md">
            <figure><img className='w-60' src={toyImg} alt={toyName} /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-secondary font-extrabold">{toyName}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="flex justify-between items-center my-2 gap-5">
                    <div className='flex items-center gap-2'>
                        <Rating style={{ maxWidth: 100 }} value={rating} itemStyles={myStyles} readOnly />
                        <span>{rating}</span>
                    </div>

                    <div>
                        <p>${price}</p>
                    </div>
                </div>
                <div className="card-actions justify-center">
                    <button onClick={() => handleDetailsClick(_id)} className="btn btn-outline btn-info">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;