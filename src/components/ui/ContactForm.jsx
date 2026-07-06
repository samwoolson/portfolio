import React, { useState, useRef } from 'react'; // 
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const formRef = useRef(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      emailjs.sendForm('contact_service', 'contact_form', formRef.current, 'ISVBtzGSIyzSXhDGC')
        .then(() => {
          setStatus('Message Sent!');
          setFormData({ name: '', email: '', message: '' });
        }, () => {
          setStatus('Something went wrong, please try again.');
        });
    } else {
      setStatus('Please fill out all fields');
    }
  };

  return (
    <div className="bg-stone-300 text-stone-950 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Let's build something great together.</h2>
      <p className="mb-6">I'm currently available for freelance projects and open to new full-time opportunities. Drop a message!</p>

      <form onSubmit={handleSubmit} ref={formRef} className="space-y-4"> {/* Add ref to form */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium">What's your name?</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 bg-white text-black rounded-md"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Your email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 bg-white text-black rounded-md"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">Tell me about your project</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 bg-white text-black rounded-md"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="mt-8 bg-orange-800 text-white px-6 py-3 rounded-full hover:bg-stone-950 transition">Send Message</button>
        </div>
      </form>

      {status && <p className="mt-4 text-center text-sm">{status}</p>}
    </div>
  );
};

export default ContactForm;