import React from 'react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgZoom from 'lightgallery/plugins/zoom';

// import aos animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import img1 from '../../../assets/gallery/gallery1.jpg'
import img2 from '../../../assets/gallery/gallery2.jpg'
import img3 from '../../../assets/gallery/gallery3.jpg'
import img4 from '../../../assets/gallery/gallery4.jpg'
import img5 from '../../../assets/gallery/gallery5.jpg'
import img6 from '../../../assets/gallery/gallery6.jpg'

const Gallery = () => {

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div data-aos="fade-up" className='my-container my-20'>
            <div className='text-center mb-5'>
                <h2 className='font-secondary font-extrabold text-xl md:text-3xl'>Kids Gallery</h2>
                <p className='mt-2 mb-5'>Vibrant, interactive space for kids to explore, learn, and create.</p>
            </div>
            <div className="App">
                <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgZoom]}
                    elementClassNames='grid grid-cols-1 md:grid-cols-3'
                    download={false}
                >
                    <a href={img1}>
                        <img alt="img1" src={img1} />
                    </a>
                    <a href={img2}>
                        <img alt="img2" src={img2} />
                    </a>
                    <a href={img3}>
                        <img alt="img2" src={img3} />
                    </a>
                    <a href={img4}>
                        <img alt="img2" src={img4} />
                    </a>
                    <a href={img5}>
                        <img alt="img2" src={img5} />
                    </a>
                    <a href={img6}>
                        <img alt="img2" src={img6} />
                    </a>
                </LightGallery>
            </div>
        </div>
    );
};

export default Gallery;