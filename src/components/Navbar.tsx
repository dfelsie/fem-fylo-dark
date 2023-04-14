import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="flex px-16 fixed py-12 w-full justify-between">
      <div>Fylo</div>
      <div className="flex w-1/6 justify-between">
        <a>Features</a>
        <a>Features</a>
        <a>Features</a>
      </div>
    </nav>
  );
}
