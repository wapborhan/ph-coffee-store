import { useState } from "react";
import CoffeCard from "./components/CoffeCard";
import { NavLink, useLoaderData } from "react-router-dom";

function App() {
  const loadCoffes = useLoaderData();
  const [coffes, setCoffes] = useState(loadCoffes);

  return (
    <div className="container max-w-7xl mx-auto my-10">
      <div className="coffe text-center">
        <span>--- Sip & Savor ---</span>
        <h2 className="text-3xl">Our Popular Products</h2>
        <NavLink
          to="/add-coffee"
          className="bg-[#E3B577] py-2 px-4 inline-block rounded-md border-2 border-[#331A15] my-5 font-h2 text-white hover:bg-[transparent] hover:text-black"
        >
          Add Coffee
        </NavLink>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {coffes.map((coffe, idx) => {
          return (
            <CoffeCard
              key={idx}
              coffe={coffe}
              coffes={coffes}
              setCoffes={setCoffes}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
