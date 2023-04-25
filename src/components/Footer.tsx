import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-black flex flex-col px-8">
      <div className="h-[50px] w-full" />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between flex-wrap text-center md:text-[]">
        <div className="w-full md:w-1/3 lg:w-1/4 text-gray-400">
          <h4 className="text-xl font-bold mb-4">Address</h4>
          <p>123 Main St.</p>
          <p>Suite 500</p>
          <p>New York, NY 10001</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 text-gray-400">
          <h4 className="text-xl font-bold mb-4">About Us</h4>
          <p>We are a company that does stuff.</p>
          <p>More information coming soon.</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 text-gray-400">
          <h4 className="text-xl font-bold mb-4">Contact Info</h4>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
          <p>Follow Us: Twitter | Facebook | Instagram</p>
        </div>
      </div>
    </footer>
  );
}
