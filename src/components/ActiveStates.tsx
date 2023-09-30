import "./ActiveStates.scss";
import { useState } from "react";
import Sidebar from "./Sidebar";

const ActiveStates = () => {
  const [activeStep] = useState(2);
  return (
    <section className="active">
      <Sidebar activeStep={activeStep} />
      <main className="plan">
        <div className="content">
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
      </main>
    </section>
  );
};

export default ActiveStates;
