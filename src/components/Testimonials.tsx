import React from "react";

type Props = {};

export default function Testimonials({}: Props) {
  return (
    <section className="flex font-san text-[.8rem] flex-col md:flex-row gap-8 text-gray-300 w-4/5 mx-auto">
      <div className="flex justify-around px-8 py-4 h-[225px] lg:h-[175px] flex-col bg-gray-800">
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex mt-2 lg:mt-0 ">
          <div className="overflow-hidden h-8 w-8 rounded-full">
            <img
              alt="Image of Satish Patel"
              src="/assets/images/profile-1.jpg"
            />
          </div>
          <div className="flex  flex-col ml-4">
            <h2 className="font-bold">Satish Patel</h2>
            <h3>Founder & CEO, Huddle</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-around px-8 py-4 h-[225px] lg:h-[175px] flex-col bg-gray-800">
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex sm:mt-2 lg:mt-0">
          <div className="overflow-hidden h-8 w-8 rounded-full">
            <img
              alt="Image of Satish Patel"
              src="/assets/images/profile-1.jpg"
            />
          </div>
          <div className="flex  flex-col ml-4">
            <h2 className="font-bold">Satish Patel</h2>
            <h3>Founder & CEO, Huddle</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-around px-8 py-4 h-[225px] lg:h-[175px] flex-col bg-gray-800">
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex sm:mt-2 lg:mt-0">
          <div className="overflow-hidden h-8 w-8 rounded-full">
            <img
              alt="Image of Satish Patel"
              src="/assets/images/profile-1.jpg"
            />
          </div>
          <div className="flex  flex-col ml-4">
            <h2 className="font-bold">Satish Patel</h2>
            <h3>Founder & CEO, Huddle</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
