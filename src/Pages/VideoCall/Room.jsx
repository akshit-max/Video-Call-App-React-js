import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Room = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  //   submit hadler
  const submitHandler = () => {
    setName("");
    navigate(`/video/${name}`);
  };
  return (
    <>
      <div className="form-container">
        <h1>Lets Start the video Call</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="please enter your name"
        />
        <button onClick={submitHandler}>Join</button>
      </div>
    </>
  );
};

export default Room;
