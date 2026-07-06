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
    <div className="bg-stone-300 text-stone-950 p-8 rounded-lg max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Let's build something great together.</h2>
      <p className="mb-6 text-stone-800">I'm currently available for freelance projects and open to new full-time opportunities. Drop a message!</p>

      <form onSubmit={handleSubmit} ref={formRef} className="space-y-6" noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold tracking-wide text-stone-700">
            What's your name? <span className="text-orange-800" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full py-2 mt-1 bg-transparent border-b-2 border-stone-500 text-stone-950 placeholder-stone-600 outline-none focus:border-orange-800 focus:ring-0 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold tracking-wide text-stone-700">
            Your email address <span className="text-orange-800" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full py-2 mt-1 bg-transparent border-b-2 border-stone-500 text-stone-950 placeholder-stone-600 outline-none focus:border-orange-800 focus:ring-0 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold tracking-wide text-stone-700">
            Tell me about your project <span className="text-orange-800" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Hello! I'd love to collaborate on..."
            value={formData.message}
            onChange={handleChange}
            required
            rows="3"
            className="w-full py-2 mt-1 bg-transparent border-b-2 border-stone-500 text-stone-950 placeholder-stone-600 outline-none focus:border-orange-800 focus:ring-0 transition-colors resize-none"
          />
        </div>

        <div className="text-center">
          <button 
            type="submit" 
            className="mt-4 bg-orange-800 text-white px-8 py-3 rounded-full hover:bg-stone-950 focus:bg-stone-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-800 transition-colors font-medium"
          >
            Send Message
          </button>
        </div>
      </form>

      {status && (
        <p 
          role="status" 
          aria-live="polite" 
          className="mt-6 text-center text-sm font-semibold text-stone-900"
        >
          {status}
        </p>
      )}
    </div>
  );
};

export default ContactForm;