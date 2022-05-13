import React from 'react';
import { Telephone, ChatHeart } from 'react-bootstrap-icons';


export default function Contact() {
  return (
    <section className="contact-area bg_color ">
      <div className="container ">
        <div className="">
          <div className="col-lg-7 col-md-12">
            <div className=" get_info">
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
      </div>
    </section>
  );
};

