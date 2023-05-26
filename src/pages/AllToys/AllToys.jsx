import React, { useContext, useEffect, useState } from 'react';
import TableRow from './TableRow';
import { AuthContext } from '../../providers/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';

const AllToys = () => {

    const { setPreloader } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    useSetTitle('All Toys');

    // fetch data
    useEffect(() => {
        fetch(`https://play-nexus-server.vercel.app/toys`)
            .then(res => res.json())
            .then(data => {
                setPreloader(false);
                setToys(data);
            })
    }, [searchValue === ""])

    // search toy
    const handleSearchClick = () => {
        fetch(`https://play-nexus-server.vercel.app/searchToys/${searchValue}`)
            .then(res => res.json())
            .then(data => {
                setPreloader(false);
                setToys(data)
            })
    };

    return (
        <div className='my-container my-5'>

            <div className="w-1/2 mx-auto py-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="button"
                        onClick={handleSearchClick}
                        className="absolute right-0 top-0 h-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Search
                    </button>
                </div>
            </div>


            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Avail. Qty.</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, _idx) => <TableRow key={toy._id} toy={toy} _idx={_idx}></TableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;