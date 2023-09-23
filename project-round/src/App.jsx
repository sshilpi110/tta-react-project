import React from "react";
import Header from "./Component/Header";
import Mid from "./Component/Mid";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div className="flex justify-center items-center  flex-wrap mt-10">
      <div className="   max-w-[1200px] grid grid-col-2 border-2 border-black ">
        <Header />

        <Mid />

        <Footer />
      </div>
    </div>
  );
};

export default App;
