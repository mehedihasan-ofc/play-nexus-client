import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useSetTitle from '../../hooks/useSetTitle';

const MyToys = () => {

    const { user, setPreloader } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [selectedOption, setSelectedOption] = useState('descending');
    const navigate = useNavigate();
    useSetTitle('My Toys');

    const url = `https://play-nexus-server.vercel.app/my-toys?email=${user?.email}&type=${selectedOption}`;

    useEffect(() => {

        fetch(url, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setPreloader(false);
                    setMyToys(data);
                }
                else {
                    // logout and then navigate
                    navigate('/')
                }

            })

    }, [url, navigate, selectedOption])

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://play-nexus-server.vercel.app/toy/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            setPreloader(false);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = myToys.filter(singleToy => singleToy._id !== id)
                            setMyToys(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className='my-container my-10'>

            <div className='text-center my-3'>
                <h4 className="font-bold text-lg mb-1">Sort By</h4>
                <select
                    id="subCategory"
                    className="appearance-none bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    required
                >
                    <option value="descending">Price - Descending </option>
                    <option value="ascending">Price - Ascending</option>
                </select>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Toy Info</th>
                            <th>Avail. Qty.</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            myToys.map(myToy => <MyToysRow key={myToy._id} myToy={myToy} handleDelete={handleDelete}></MyToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;