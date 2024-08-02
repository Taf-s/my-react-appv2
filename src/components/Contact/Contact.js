import React from "react";

/**
 * Contact component renders a contact form section with fields for name, email, and message.
 *
 * @return {JSX.Element} The contact form section.
 */
const Contact = () => {
  return (
    // Container for the contact section
    <section className=" py-16">
      <div className="container mx-auto px-4">
        {/* Heading for the contact section */}
        <h2 className="text-6xl font-bold text-center mb-8">Contact</h2>
        {/* Contact form */}
        <form className="max-w-md mx-auto">
          {/* Field for entering the name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-black font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          {/* Field for entering the email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-black font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          {/* Field for entering the message */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-black font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          {/* Submit button for the contact form */}
          <button
            type="submit"
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
