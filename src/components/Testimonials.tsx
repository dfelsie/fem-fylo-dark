import React from "react";

type Props = {};

export default function Testimonials({}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-8  w-3/4 mx-auto">
      <div className="flex flex-col bg-gray-800">
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex">
          <img src="/assets/images/profile-1.jpg" />
          <h2>Satish Patel</h2>
          <h3>Founder & CEO, Huddle</h3>
        </div>
      </div>
      <div className="flex flex-col bg-gray-800">
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex">
          <img src="/assets/images/profile-1.jpg" />
          <h2>Satish Patel</h2>
          <h3>Founder & CEO, Huddle</h3>
        </div>
      </div>
      <div className="flex flex-col bg-gray-800">
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex">
          <img src="/assets/images/profile-1.jpg" />
          <h2>Satish Patel</h2>
          <h3>Founder & CEO, Huddle</h3>
        </div>
      </div>
    </div>
  );
}
