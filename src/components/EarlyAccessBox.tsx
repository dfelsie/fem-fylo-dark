import React from "react";

type Props = {};

export default function EarlyAccessBox({}: Props) {
  return (
    <section className=" flex flex-col relative bg-gray-800 w-4/5 md:w-1/2 mx-auto text-center px-8 py-8 gap-5">
      <h1 className="text-2xl font-semibold">Get early access today</h1>
      <p className="px-4">
        {" "}
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.{" "}
      </p>
      <div className="flex flex-col md:flex-row w-full justify-around gap-4 lg:gap-0">
        <input
          type="email"
          className=" xs:w-full md:w-1/2 my-4 md:my-0 min-h-[35px] rounded-full text-black indent-4"
          placeholder="example@example.com"
        />
        <button className="bg-blue-500 px-6 py-4 rounded-full">
          Get Started For Free
        </button>
      </div>
    </section>
  );
}
