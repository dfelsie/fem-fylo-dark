import React from "react";

type Props = {};

export default function IntroHero({}: Props) {
  return (
    <div className="m-auto flex flex-col w-2/5 text-center">
      <img src="/assets/images/illustration-intro.png" />
      <h1 className="font-extrabold text-5xl mt-4">
        All your files in one secure location,
        <br /> accessible anywhere
      </h1>
      <p className="mt-8">
        {" "}
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.{" "}
      </p>
      <button
        className="mt-8 bg-gradient-to-r from-teal-300
      font-extrabold
      to-blue-400 py-4 text-md w-1/3 mx-auto rounded-full"
      >
        Get started
      </button>
    </div>
  );
}
