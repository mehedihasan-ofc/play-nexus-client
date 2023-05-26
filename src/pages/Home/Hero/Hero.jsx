import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { AuthContext } from "../../../providers/AuthProvider";


const Hero = () => {

    const { setPreloader } = useContext(AuthContext);
    const [slider, setSlider] = useState([]);

    useEffect(() => {

        fetch('https://play-nexus-server.vercel.app/sliders')
            .then(res => res.json())
            .then(data => {
                setPreloader(false);
                setSlider(data);
            })

    }, []);

    return (
        <div>
            <>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    slidesPerView={1}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        slider.map((singleSlider, id) => <SwiperSlide
                            style={
                                {
                                    height: "85vh",
                                    borderRadius: "0",
                                    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${singleSlider.image}) no-repeat center / cover`
                                }
                            }
                            key={id}

                        >
                            <h1 className="text-white font-primary uppercase text-3xl md:text-5xl">{singleSlider.title}</h1>
                            <p className="w-full md:w-2/4 font-secondary text-xs md:text-base text-white py-3 md:py-4">{singleSlider.description}</p>

                            <div className="flex items-center gap-5">
                                <button className="border border-gray-100 text-white px-4 py-2 text-sm hover:border-cyan-500 hover:text-cyan-500 transition duration-200">Shop Now</button>
                                <button className="border border-gray-100 text-white px-4 py-2 text-sm hover:border-cyan-500 hover:text-cyan-500 transition duration-200">Explore Now</button>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>

            <div>

            </div>
        </div>
    );
};

export default Hero;