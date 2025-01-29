// components/Contact.js
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
       { <img src="https://images.jdmagicbox.com/comp/kodaikanal/f4/9999p4542.4542.181114100234.w9f4/catalogue/jsr-naturals-oils-and-spices-kodaikanal-ho-kodaikanal-oil-dealers-tvaliz52z7.jpg" alt="Chocolates" 
       className="homeimg"></img> }
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <img src="/cardimg.jpg" alt="card" className="cardimg"></img>
    </div>
  );
};

export default Contact;
