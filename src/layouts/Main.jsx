import React, { useContext } from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import {Cube} from 'react-preloaders';

const Main = () => {

    const { preloader } = useContext(AuthContext);

    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Cube color={'#35B1E5'} customLoading={preloader} />
        </>
    );
};

export default Main;