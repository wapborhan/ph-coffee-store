const Header = () => {
  return (
    <div
      className="text-center py-4 text-white text-3xl flex justify-center items-center gap-5"
      style={{
        background: `url(/images/more/15.jpg), lightgray 50% / cover no-repeat`,
      }}
    >
      <img src="/images/more/logo1.png" className="w-12" alt="" />
      <h2>Espresso Emporium</h2>
    </div>
  );
};

export default Header;
