import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import Sidebar from "./Sidebar";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [activeStep, setActiveStep] = useState(1);

  const navigate = useNavigate();

  const validateName = () => {
    if (name.trim() === "") {
      setNameError("Name is required");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePhone = () => {
    const phoneRegex = /^\+?\d{1,4}?\s?\d{1,4}?\s?\d{1,4}?\s?\d{1,4}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Invalid phone number");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validateName() && validateEmail() && validatePhone()) {
      // Form is valid, you can proceed to the next step
      console.log("Form submitted successfully");
      setActiveStep(2);
      navigate("/active");
    } else {
      console.log("Form has errors, please fix them");
    }
  };

  return (
    <section className="home">
      <Sidebar activeStep={activeStep} />
      <main className="personal">
        <div className="content">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
          />
          <span className="error">{nameError}</span>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          <span className="error">{emailError}</span>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="text"
            placeholder="e.g. +1 234 567 890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={validatePhone}
          />
          <span className="error">{phoneError}</span>
          <button type="submit" className="btn">
            Next Step
          </button>
        </form>
      </main>
    </section>
  );
};

export default Home;
