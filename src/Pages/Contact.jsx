import React from "react";
import Layout from "../Components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div
        className="content"
        style={{
          height: "75vh",
          margin: "30px",
        }}
      >
        <h1>Contact US</h1>
        <hr />
        <h2>Phone : 0123456789</h2>
        <h2>email : a@a.com</h2>
        <h2>Instagram : technical_update</h2>
        <h2>Youtube : Techifo YT</h2>
      </div>
    </Layout>
  );
};

export default Contact;
