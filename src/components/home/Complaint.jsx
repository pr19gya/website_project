import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Label Component
const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-white">
    {children}
  </label>
);

// Input Component
const Input = ({ id, type = 'text', placeholder, className }) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    className={`mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-[#E0218A] focus:border-[#E0218A] sm:text-sm ${className}`}
  />
);

// Textarea Component
const Textarea = ({ id, placeholder, className }) => (
  <textarea
    id={id}
    placeholder={placeholder}
    className={`mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-[#E0218A] focus:border-[#E0218A] sm:text-sm ${className}`}
  />
);

// Button Component
const Button = ({ type, children, className }) => (
  <button
    type={type}
    className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#E0218A] hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E0218A] ${className}`}
  >
    {children}
  </button>
);

// Complaint Form Component
export default function Complaint() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    complaint: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("Sending....");

    let KEY = 'fd755998-5a7e-4f7e-988d-742155f34fb9'
  
    const formData = new FormData(event.target);
  
    // Append API key and any other necessary data
    formData.append("access_key", KEY);
    formData.append("name", formData.get("name"));
    formData.append("email", formData.get("email"));
    formData.append("complaint", formData.get("complaint"));
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResponseMessage("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResponseMessage(data.message || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error("Form submission error", error);
      setResponseMessage("An error occurred while submitting the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-20">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:flex-row md:gap-12 md:px-6 lg:gap-16">
        <div className="space-y-4 text-center md:w-1/2 md:text-left">
          <motion.h2
            className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Submit a Complaint
          </motion.h2>
          <motion.p
            className="text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have an issue you need to report? Fill out the form below and we'll get back to you as soon as possible.
          </motion.p>
        </div>
        <div className="w-full md:w-1/2">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gray-900 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                //   onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                //   onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="complaint">Complaint</Label>
              <Textarea
                id="complaint"
                name="complaint"
                value={formData.complaint}
                // onChange={handleChange}
                placeholder="Describe your complaint in detail"
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
            </Button>
            {responseMessage && (
              <p className="mt-4 text-center text-white">{responseMessage}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
