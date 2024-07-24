import React from 'react';
import shortImage from "../Assets/short.jpg";

const AppWorking = () => {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col w-full lg:w-[500px] lg:pl-10 lg:pt-10 mb-10 lg:mb-0">
          <h1 className="text-2xl text-sky-600 py-3 font-semibold">SHORTCUTS</h1>
          <h2 className="text-4xl font-semibold py-3">DO MORE WITH LESS</h2>
          <p className="text-xl font-medium py-3">
            In-app Shortcuts allow you to control multiple appliances with a single swipe. Like turning on your house in the morning to setting a mood for movie night. It’s like having an extra set of hands to help you around the house. Which is awesome.
          </p>
        </div>

        <div className="flex flex-grow justify-center lg:justify-end">
          <img
            className="w-full max-w-[600px] h-auto lg:max-w-[900px]"
            src={shortImage}
            alt="shortcuts"
          />
        </div>
      </div>
    </section>
  );
};

export default AppWorking;
