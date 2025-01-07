import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
      <div className="md:mx-10">
        <div className="flex flex-col items-center text-center gap-10 my-10 mt-40 text-sm">
          <div className="flex flex-col md:flex-row justify-center items-center gap-14">
            <div>
              <p className="text-xl font-medium mb-5">COMPANY</p>
              <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>
  
            <div>
              <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
              <ul className="flex flex-col gap-2 text-gray-600">
                <li>+40735581244</li>
                <li>bianca.maier@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  