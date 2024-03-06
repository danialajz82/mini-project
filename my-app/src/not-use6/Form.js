import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    alert(`Name : ${name} , Email : ${email} , Message : ${message}`);
  };
  return (
    <form onSubmit={handelSubmit}>
      <h1>contact form</h1>
      <label htmlFor="name">name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="message">message</label>
      <textarea
        name="name"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
