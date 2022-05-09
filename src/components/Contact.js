import React, { useState } from "react";
import { Telephone, ChatHeart } from 'react-bootstrap-icons';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/b9c80780-cfbf-11ec-a821-6590c8b23a22";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">I'll be in touch soon.</div>
      </>
    );
  }

  return (
    <>
      <section className="contact-area bg_color">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="get_info">
                <div className="section_title_two">
                  <h6>Get in Touch</h6>
                  <h2>Contact Details</h2>
                </div>
                <div className="media get_item">
                  <Telephone />
                </div>
                <div className="media-body">
                  <h6>Call me</h6>
                  <a href=".#">512-657-5134</a>
                </div>
                <div className="media get_item">
                  <ChatHeart />
                </div>
                <div className="media-body">
                  <h6>Email Me</h6>
                  <a href=".#">noddes@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="react-reveal">
              <div className="section_title_two ">
                <h6> Contact Me</h6>
                <h2>Message Me Here</h2>
              </div>
              <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
              >
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Your name"
                    name="Your name"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  <textarea
                    placeholder="Your message"
                    name="message"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  <button
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Send a message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>







    </>
  );
};

export default Contact;