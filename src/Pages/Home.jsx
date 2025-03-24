import React from "react";
import Layout from "../Components/Layout/Layout";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-overly">
          <div className="container">
            <h2>Connect With anyone, anywhere in high quality video calls</h2>
            <p>
              stay connected with friends, family, or busines partners
              effortlessly
            </p>
            <NavLink to="/room" className="cta-button">
              Get Started
            </NavLink>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
