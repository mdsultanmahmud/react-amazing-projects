import Navbar from "../components/Navbar/Navbar";

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default RootLayout;
