import { useState, useEffect } from "react";
import "./Sidebar.scss";
import sidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";
import sidebarMobile from "../assets/images/bg-sidebar-mobile.svg";

interface SidebarProps {
  activeStep: number; // Define the prop for active step
}

const Sidebar = ({ activeStep }: SidebarProps) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="sidebar">
      <div className="sidebar-wrapper">
        <img src={screenWidth < 601 ? sidebarMobile : sidebarDesktop} alt="sidebar" />
        <div className="overlay-text">
          <div className="form">
            <div className={`form__card`}>
              <p className={`number ${activeStep === 1 ? "active" : ""}`}>1</p>
              <div>
                <p className="span">Step 1</p>
                <p className="select">Your Info</p>
              </div>
            </div>
            <div className={`form__card`}>
              <p className={`number ${activeStep === 2 ? "active" : ""}`}>2</p>
              <div>
                <p className="span">Step 2</p>
                <p className="select">Select plan</p>
              </div>
            </div>
            <div className={`form__card`}>
              <p className={`number ${activeStep === 3 ? "active" : ""}`}>3</p>
              <div>
                <p className="span">Step 3</p>
                <p className="select">Add-ons</p>
              </div>
            </div>
            <div className={`form__card`}>
              <p className={`number ${activeStep === 4 ? "active" : ""}`}>4</p>
              <div>
                <p className="span">Step 4</p>
                <p className="select">Summary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
