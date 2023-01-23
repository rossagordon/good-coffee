import React from 'react';

const Email = () => {
  return (
    <div className="w-full py-16 bg-[#284B63] text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Join our Coffee Club!
          </h1>
          <p>
            Sign up for our email list for the latest news on our roating single
            origin coffees, news, and more.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-xol sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-3 flex w-full rounded-md text black"
            />
            <button className="bg-white text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
