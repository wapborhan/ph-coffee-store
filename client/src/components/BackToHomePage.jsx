import { NavLink } from "react-router-dom";

const BackToHomePage = () => {
  return (
    <div>
      <NavLink
        to="/"
        className=" py-2 my-3 px-4 inline-block rounded-md hover:bg-[#E3B577] text-black"
      >
        <span>⇐</span>
        <span className="[text-shadow:_0_0_5px_rgb(0_0_0_/_50%)] my-5 font-h2 text-[25px] ml-3">
          Back To Home
        </span>
      </NavLink>
    </div>
  );
};

export default BackToHomePage;
