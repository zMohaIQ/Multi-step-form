import "./Home.scss";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <section className="home">
      <Sidebar />
      <main className="personal">
        <div className="content">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <form>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="e.g. Stephen King" />
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" placeholder="e.g. stephenking@lorem.com" />
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="number" placeholder="e.g. +1 234 567 890" />
        </form>
        <button>Next Step</button>
      </main>
    </section>
  );
};

export default Home;
