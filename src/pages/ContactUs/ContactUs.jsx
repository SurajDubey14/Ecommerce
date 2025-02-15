import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission logic (like sending to backend, etc.)
  };

  return (
    <>
      <div className="py-5">
        <h1 className="text-center text-7xl font-semibold">Contact-Us</h1>
        <nav class=" p-6">
          <ul class="list-disc pl-6 text-gray-700 space-y-4">
            <li class="text-xl font-semibold text-gray-800">
              We love to connect and engage with you.
            </li>
            <li class="text-lg">
              Our commitment to serving you goes beyond offering stylish apparel
              — we ensure every interaction is seamless, personalized, and
              tailored just for you.
            </li>
            <li class="text-lg">
              Whether you need assistance or just want to share your thoughts,
              we’re always here to listen and elevate your shopping journey with
              us.
            </li>
            <li class="text-lg">
              Got feedback or ideas? Need support? We’re just a message away!
              Reach out via WhatsApp at{" "}
              <span class="font-semibold">+91 7777019901</span>, or send us an
              email at <span class="font-semibold">help.clothio@gmail.com</span>{" "}
              for prompt, thoughtful responses.
            </li>
            <li class="text-lg">
              At Clothio, every touchpoint is more than just a transaction —
              it’s an opportunity to create a meaningful connection and reflect
              your individuality through fashion.
            </li>
            <li class="text-lg">
              Join us on a journey where your ideas, feedback, and suggestions
              drive our innovation, allowing us to create something
              extraordinary together.
            </li>
          </ul>
        </nav>

        <section className="flex flex-col lg:flex-row items-center w-full space-y-10 lg:space-y-0 lg:space-x-10 py-10 px-4">
          {/* Form Section */}
          <div className="p-2 sm:p-8  w-full lg:w-1/2">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Leave a Message
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  id="Blog-name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  id="Blog-email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <textarea
                  id="Blog-message"
                  placeholder="Your Comment"
                  value={message}
                  onChange={handleMessageChange}
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex ">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 focus:outline-none"
                >
                  {isSubmitted ? "Thanks for your comment!" : "Submit"}
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0  w-full lg:w-1/2">
            <img
              src="/Images/About.jpg"
              alt="About"
              className="w-full h-[60vh] object-contain "
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
