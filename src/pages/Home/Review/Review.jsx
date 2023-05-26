import React, { useContext, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating, Star } from '@smastrom/react-rating'

// import aos animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Review.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { AuthContext } from '../../../providers/AuthProvider';

const Review = () => {

    const [testimonials, setTestimonials] = useState([]);
    const { setPreloader } = useContext(AuthContext);

    useEffect(() => {

        fetch('https://play-nexus-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setTestimonials(data);
                setPreloader(false);
            });

    }, [])

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#FF8701',
        inactiveFillColor: '#ffb700'
    }

    return (
        <div data-aos="fade-up">
            <div className='my-container my-20'>
                <div className='text-center mb-5'>
                    <h2 className='font-secondary font-extrabold text-xl md:text-3xl'>What our customers are Saying</h2>
                    <p className='mt-2 mb-5'>Customers love our service, products, support, and prompt delivery.</p>
                </div>
                <div className='p-5'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >

                        {
                            testimonials.map(testimonial => <SwiperSlide
                                key={testimonial._id}
                            >

                                <div className='w-14 h-14'>
                                    <img className='rounded-full' src={testimonial.img} alt="" />
                                </div>

                                <div>
                                    <h4 className='text-sm md:text-base my-1'>{testimonial.name}</h4>

                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={testimonial.rating}
                                        itemStyles={myStyles}
                                        readOnly
                                    />
                                </div>

                                <svg className='absolute top-5 right-10 left-auto' width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.4375 25L14.5 25L14.5 32.1429C14.5 36.0826 11.2488 39.2857 7.25 39.2857L6.34375 39.2857C4.83711 39.2857 3.625 40.4799 3.625 41.9643L3.625 47.3214C3.625 48.8058 4.83711 50 6.34375 50L7.25 50C17.2641 50 25.375 42.0089 25.375 32.1429L25.375 5.35714C25.375 2.39955 22.9395 -3.06509e-06 19.9375 -3.32753e-06L5.4375 -4.59516e-06C2.43555 -4.8576e-06 4.16136e-06 2.39955 3.9028e-06 5.35714L2.65391e-06 19.6429C2.39535e-06 22.6004 2.43555 25 5.4375 25ZM38.0625 25L47.125 25L47.125 32.1429C47.125 36.0826 43.8738 39.2857 39.875 39.2857L38.9688 39.2857C37.4621 39.2857 36.25 40.4799 36.25 41.9643L36.25 47.3214C36.25 48.8058 37.4621 50 38.9688 50L39.875 50C49.8891 50 58 42.0089 58 32.1429L58 5.35714C58 2.39956 55.5645 -2.12922e-07 52.5625 -4.75361e-07L38.0625 -1.74299e-06C35.0606 -2.00543e-06 32.625 2.39955 32.625 5.35714L32.625 19.6429C32.625 22.6004 35.0605 25 38.0625 25Z" fill="#ECE9E9"></path>
                                </svg>

                                <p className='text-xs md:text-sm mt-2'>{testimonial.review}</p>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Review;