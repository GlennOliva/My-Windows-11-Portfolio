import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Contact = ({
  setSuccessMessage, // Receiving setSuccessMessage from Parent
}: {
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage(""); // Clear previous messages

    try {
      const response = await emailjs.send(
        "service_fqh3pll", // Your EmailJS service ID
        "template_c9yuphk", // Your EmailJS template ID
        {
          fullname: formData.fullname, // Ensure keys match EmailJS template
          email: formData.email,
          contact: formData.contact,
          message: formData.message,
        },
        "XO5O4_7BR_t-bx0DE" // Your EmailJS public key
      );

      if (response.status === 200) {
        setSuccessMessage("Message sent successfully! 📩");
        setFormData({ fullname: "", email: "", contact: "", message: "" });

        setTimeout(() => {
          setSuccessMessage(""); // Hide message after 3 seconds
        }, 3000);
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSuccessMessage("Failed to send message. Please try again.");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 py-10"
    >
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        CONTACT
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="border border-gray-400 p-6 md:p-10 w-full max-w-3xl rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Full Name Field */}
        <div className="grid grid-cols-1 gap-4 mb-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full p-3 border border-gray-400 bg-transparent text-white placeholder-gray-400 rounded-md focus:border-blue-400 transition duration-200"
            />
            <p className="text-xs mt-1 text-center">Full Name</p>
          </motion.div>
        </div>

        {/* Email & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {["Email", "Contact"].map((placeholder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
              className="flex flex-col"
            >
              <input
                type={placeholder === "Email" ? "email" : "tel"}
                name={placeholder.toLowerCase()}
                value={
                  formData[placeholder.toLowerCase() as keyof typeof formData]
                }
                onChange={handleChange}
                placeholder={placeholder}
                required
                pattern={placeholder === "Contact" ? "\\d{11}" : undefined}
                maxLength={placeholder === "Contact" ? 11 : undefined}
                inputMode={placeholder === "Contact" ? "numeric" : undefined}
                className="w-full p-3 border border-gray-400 bg-transparent text-white placeholder-gray-400 rounded-md focus:border-blue-400 transition duration-200"
              />
              <p className="text-xs mt-1 text-center">
                {placeholder.toUpperCase()}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Message Box */}
        <motion.div
          className="mb-4 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Compose your message"
            required
            className="w-full p-3 border border-gray-400 bg-transparent text-white placeholder-gray-400 rounded-md focus:border-blue-400 transition duration-200"
          ></textarea>
          <p className="text-xs mt-1 text-center">COMPOSE MESSAGE</p>
        </motion.div>

        {/* Send Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            type="submit"
            disabled={isSending}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-5 w-full md:w-auto px-6 py-3 border border-gray-400 bg-transparent text-white font-semibold rounded-md ${
              isSending
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-800 transition duration-300"
            }`}
          >
            {isSending ? "SENDING..." : "SEND MESSAGE"}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
