import React from "react";

type Props = {};

export default function FeatureGrid({}: Props) {
  return (
    <section className="mx-auto w-2/3 grid grid-cols-1 md:grid-cols-2 px-4">
      <div className="px-8 mt-24 flex flex-col text-center">
        <img
          className="h-20 mx-auto"
          src="/assets/images/icon-access-anywhere.svg"
          alt="access anywhere"
        />
        <h2 className="font-extrabold text-xl my-4">
          Access your files, anywhere
        </h2>
        <p>
          {" "}
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.{" "}
        </p>
      </div>
      <div className="px-8 mt-24 flex flex-col text-center">
        <img
          alt="security"
          className="h-20 mx-auto"
          src="/assets/images/icon-security.svg"
        />
        <h2 className="font-extrabold text-xl my-4">Security you can trust</h2>
        <p>
          2-factor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files.{" "}
        </p>
      </div>
      <div className="px-8 mt-24 flex flex-col text-center">
        <img
          alt="collaboration"
          className="h-20 mx-auto"
          src="/assets/images/icon-collaboration.svg"
        />
        <h2 className="font-extrabold text-xl my-4">
          Real-time collaboration{" "}
        </h2>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.{" "}
        </p>
      </div>
      <div className="px-8 mt-24 flex flex-col text-center">
        <img
          alt="any file"
          className="h-20 mx-auto"
          src="/assets/images/icon-any-file.svg"
        />
        <h2 className="font-extrabold text-xl my-4">Store any type of file </h2>
        <p>
          Whether you're sharing holidays photos or work documents, Fylo has you
          covered allowing for all file types to be securely stored and shared.{" "}
        </p>
      </div>
    </section>
  );
}
