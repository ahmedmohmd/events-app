import { FC } from "react";
import Footer from "../common/Footer";
import NavBar from "../common/NavBar";

interface LayoutProps {
  children: any;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#fff7ee] flex flex-col items-center justify-center min-h-screen min-w-screen ">
      <NavBar />
      <main className="w-full h-full grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
