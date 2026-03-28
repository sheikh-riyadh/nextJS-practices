"use client";
import { registerUser } from "@/app/actions/auth/auth";
import React from "react";

const ContactForm = () => {
  const handleSubmint = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const payload = {
      name,
      email,
      password,
    };
   const response = await registerUser(payload)
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        className="flex flex-col gap-3 bg-black p-5 rounded-md"
        onSubmit={handleSubmint}
      >
        <input
          className="border focus:outline-none p-1 rounded-md"
          type="text"
          name="name"
          placeholder="Name *"
        />
        <input
          className="border focus:outline-none p-1 rounded-md"
          type="email"
          name="email"
          placeholder="Email *"
        />
        <input
          className="border focus:outline-none p-1 rounded-md"
          type="password"
          name="password"
          placeholder="*********"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
