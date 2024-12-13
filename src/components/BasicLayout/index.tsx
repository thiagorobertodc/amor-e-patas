import { Content } from "./Content";
import Navbar from "./Navbar/Navbar";
import "./style.scss";
const BasicLayout = () => {
  return (
    <div className="main-layout h-screen w-screen grid grid-rows-[auto_1fr] overflow-hidden">
      <Navbar />
      <Content />
    </div>
  );
};

export default BasicLayout;
