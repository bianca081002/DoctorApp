import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-6 sm:px-12 lg:px-20">
      {/* Title Section */}
      <div className="text-center text-3xl font-semibold text-gray-800 pt-10">
        <p>
          ABOUT <span className="text-primary">US</span>
        </p>
      </div>

      {/* Description Section */}
      <div className="my-12 flex flex-col md:flex-row gap-12">
      <div className="flex flex-col items-center justify-center text-center gap-8 text-base text-gray-700 md:w-2/3 mx-auto my-12">
  <p className="leading-relaxed">
    Welcome to <b>DoctorApp</b>, your trusted partner in managing your
    healthcare needs conveniently and efficiently. We understand the
    challenges individuals face when it comes to scheduling doctor
    appointments and managing health records.
  </p>
  <p className="leading-relaxed">
    At <b>DoctorApp</b>, we are committed to delivering excellence in
    healthcare technology. Our platform continuously evolves, ensuring a
    superior user experience while simplifying access to healthcare.
    Whether you're booking your first appointment or managing ongoing care,
    <b>DoctorApp</b> is here to support you every step of the way.
  </p>
  <div>
    <b className="text-xl text-gray-800">Our Vision</b>
    <p className="mt-2 leading-relaxed">
      Our vision is to create a seamless healthcare journey for everyone. We
      bridge the gap between patients and healthcare providers, ensuring that
      you can access the care you need, exactly when you need it.
    </p>
  </div>
</div>


      </div>

      {/* Why Choose Us Section */}
      <div className="text-center text-2xl font-semibold my-8">
        <p>
          WHY <span className="text-primary">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-16">
        {/* Efficiency Card */}
        <div className="border rounded-lg px-10 py-8 flex-1 shadow-md hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer">
          <b className="text-lg">EFFICIENCY</b>
          <p className="mt-2 text-sm leading-relaxed">
            Enjoy a streamlined and easy process to book appointments that fit
            seamlessly into your busy lifestyle.
          </p>
        </div>

        {/* Convenience Card */}
        <div className="border rounded-lg px-10 py-8 flex-1 shadow-md hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer">
          <b className="text-lg">CONVENIENCE</b>
          <p className="mt-2 text-sm leading-relaxed">
            Access a network of trusted healthcare professionals in your area,
            right at your fingertips.
          </p>
        </div>

        {/* Personalization Card */}
        <div className="border rounded-lg px-10 py-8 flex-1 shadow-md hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer">
          <b className="text-lg">PERSONALIZATION</b>
          <p className="mt-2 text-sm leading-relaxed">
            Receive tailored recommendations and reminders to help you stay on
            top of your health and wellness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
