import { useState } from "react";
import CoffeCard from "./components/CoffeCard";
import { useLoaderData } from "react-router-dom";

function App() {
  const loadCoffes = useLoaderData();
  const [coffes, setCoffes] = useState(loadCoffes);

  return (
    <div className="container max-w-7xl mx-auto my-10">
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
