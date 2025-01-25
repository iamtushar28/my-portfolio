import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
