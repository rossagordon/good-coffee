import React from 'react';
import Barista from '../assets/barista.jpg';
import Farm from '../assets/coffeefarm.jpg';
import Cupping from '../assets/cupping.jpg';

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-[#fff]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="w-full shadow-xl bg-[#D9D9D9] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-full mx-auto mt-[-3] bg-white"
            src={Farm}
            alt="Coffee Farm"
          />
          <h2 className="text-2xl font-bold text-center py-8">Newsletter</h2>
          <p className="text-center text-4xl font-bold">Coffee Journals</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              In the last year, we've visited 3 of our partner's coffee farms in
              Costa Rica, Mexico, and Colombia.
            </p>
          </div>
          <button className="bg-[#011627] text-white w-[200px] rounded-md my-6 mx-auto px-6 py-3">
            Learn More
          </button>
        </div>

        {/* Card 2 */}
        <div className="w-full shadow-xl bg-[#D9D9D9] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-full mx-auto mt-[-3] bg-white"
            src={Barista}
            alt="A barista serving coffee"
          />
          <h2 className="text-2xl font-bold text-center py-8">Jobs</h2>
          <p className="text-center text-4xl font-bold">We're Hiring!</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              We want work to be fun. Free coffee, flexible hours, and benefits
              available for everyone.
            </p>
          </div>
          <button className="bg-[#011627] text-white w-[200px] rounded-md my-6 mx-auto px-6 py-3">
            View Current Openings
          </button>
        </div>

        {/* Card 3 */}
        <div className="w-full shadow-xl bg-[#D9D9D9] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-full mx-auto mt-[-3] bg-white"
            src={Cupping}
            alt="Coffee Cupping"
          />
          <h2 className="text-2xl font-bold text-center py-8">Cuppings</h2>
          <p className="text-center text-4xl font-bold">
            Coffee tastings are back!
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Wednesdays - 1pm - Main St. Cafe
            </p>
          </div>
          <button className="bg-[#011627] text-white w-[200px] rounded-md my-6 mx-auto px-6 py-3">
            View Calender
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
