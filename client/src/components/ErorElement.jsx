import Header from "../layout/Header";
import BackToHomePage from "./BackToHomePage";

const ErorElement = () => {
  return (
    <>
      <Header />
      <div className="mx-auto w-full text-center h-screen flex flex-col items-center justify-center">
        <BackToHomePage />
        <img src="/images/404/404.gif" alt="" className="mx-auto" />
      </div>
    </>
  );
};

export default ErorElement;
