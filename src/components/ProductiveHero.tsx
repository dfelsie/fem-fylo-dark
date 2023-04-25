import React from "react";

type Props = {};

export default function ProductiveHero({}: Props) {
  return (
    <section className="flex flex-col md:flex-row items-center w-3/4 mx-auto gap-8">
      <img
        alt="stay productive"
        className="h-1/2 w-full"
        src="/assets/images/illustration-stay-productive.png"
      />
      <div className="flex flex-col">
        <h1 className="font-extrabold text-4xl">
          Stay productive,
          <br /> wherever you are
        </h1>
        <p>
          <span className="block mt-4">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </span>

          <span className="block mt-4">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </span>
        </p>
        <a
          href="#"
          className="  text-cyan-300 flex mt-4 border-b-2
          hover:text-white hover:border-b-white transition duration-500 ease-in-out
          border-b-cyan-300 pb-1 w-fit pr-1"
        >
          See how Fylo works
          <img
            alt="arrow"
            src="/assets/images/icon-arrow.svg"
            className="h-4 my-auto pl-2"
          ></img>
        </a>
      </div>
    </section>
  );
}
