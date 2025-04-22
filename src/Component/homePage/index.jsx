import React from "react";
import "./style.css";
import Rass from "../Header/Index";
import Foo from "../footer";
import Main from "../Main";
export default function Lyaut() {
  return (
    <>
      <header>
        <Rass />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Foo />
      </footer>
    </>
  );
}
