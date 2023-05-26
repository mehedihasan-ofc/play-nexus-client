import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 md:p-20 bg-base-200 text-base-content">
                <div>
                    <h2 className='font-primary text-black text-4xl md:text-5xl'>PlayNexus</h2>
                    <p className='mt-1'>Rev up the Fun with PlayNexus <br />- Kids' Car Adventures!</p>
                </div>
                <div>
                    <span className="footer-title">Explore</span>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Enterprise</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Pricing</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Github</a>
                </div>
                <div>
                    <span className="footer-title">Address</span>
                    <a className="link link-hover">4845 Deer Ridge Drive <br />Montclair, NJ 07042</a>
                    <a className="link link-hover">Phone: 973-571-3250</a>
                    <a className="link link-hover">Email: playnexus@gmail.com</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p className='text-sm md:text-base'>Copyright © 2023 - All right reserved by PlayNexus</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;