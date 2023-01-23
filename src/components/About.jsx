import React from 'react';
import Steaming from '../assets/steamingmilk.jpg';

const About = () => {
  return (
    <div name="about" className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-5">
        <img
          src={Steaming}
          alt="Barista steaming milk."
          className="w-[500px] mx-auto my-4"
        />
        <div className="flex flex-col justify-center">
          <p className="md:text-2xl text-xl font-bold pl-2 text-center">
            We select and source the best coffees from around the world. Our
            focus is to serve the best coffee, while establishing direct
            relationships to best support our produce partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
