import React, { useContext, useEffect, useState } from 'react';
import ToyCard from './ToyCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import './CategoryStyle.css'
import { AuthContext } from '../../../providers/AuthProvider';

const ShopByCategory = () => {

    const { setPreloader } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [category, setCategory] = useState('Sports Car');

    useEffect(() => {
        fetch(`https://play-nexus-server.vercel.app/shopByCategory/${category}`)
            .then(res => res.json())
            .then(data => {
                setPreloader(false);
                setToys(data)
            })
    }, [category])

    const handleCategory = (categoryName) => {
        setCategory(categoryName);
    };


    return (

        <div className='my-container my-20'>

            <div className='text-center mb-5'>
                <h2 className='font-secondary font-extrabold text-xl md:text-3xl'>Popular Products</h2>
                <p className='mt-2 mb-5'>Elevate your style with our chic new arrivals—shop now!</p>
            </div>

            <Tabs>
                <TabList>
                    <Tab onClick={() => handleCategory('Sports Car')}>Sports Car</Tab>
                    <Tab onClick={() => handleCategory('Truck')}>Truck</Tab>
                    <Tab onClick={() => handleCategory('Police Car')}>Police Car</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                        {
                            toys.map((toy) => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                        {
                            toys.map((toy) => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                        {
                            toys.map((toy) => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;