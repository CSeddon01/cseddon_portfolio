import React, { useState } from 'react';

//contact form made with Herotofu.  This allows emails to be submitte to my account. Also, after user submits email, they will recieve a confirmation text on the screen.

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/b9c80780-cfbf-11ec-a821-6590c8b23a22';
const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className='text-2xl'>Thank you!</div>
                <div className='text-md'>I'll be in touch soon.</div>
            </>
        );
    }

    return (
        <main className='col-lg-6 float-end'>
            <div className='react-reveal'>
                <container className='section_title_two '>
                    <h6> Contact Me</h6>
                    <h2>Message Me Here or email me directly at noddes@gmail.com</h2>
                    <form
                        action={FORM_ENDPOINT}
                        onSubmit={handleSubmit}
                        method='POST'
                        target='_blank'
                    >
                        <div className='mb-3 pt-0'>
                            <input
                                type='text'
                                placeholder='Your name'
                                name='Your name'
                                className='px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
                                required
                            />
                        </div>
                        <div className='mb-3 pt-0'>
                            <input
                                type='email'
                                placeholder='Email'
                                name='email'
                                className='px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
                                required
                            />
                        </div>
                        <div className='mb-3 pt-0'>
                            <textarea
                                placeholder='Your message'
                                name='message'
                                className='px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
                                required
                            />
                        </div>
                        <div className='mb-3 pt-0'>
                            <button
                                className='bg-blue-500 text-info active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                type='submit'
                            >
                                Send a message
                            </button>
                        </div>
                    </form>
                </container>
            </div>
        </main>
    );
};

export default ContactForm;
