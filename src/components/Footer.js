import React from 'react';

export default function Footer() {
  return (
    <div className='section_footer text-white'>
      <div className='container p-4 pb-0'>
        <section className='mb-4'>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://www.linkedin.com/in/christine-seddon-2a97a2158/'
            role='button'
            target='_link'
          >LinkedIn</a>
          <a
            className='btn btn-primary btn-floating m-1 '
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/CSeddon01'
            role='button'
            target='_git'
          >GitHub</a>
        </section>
      </div>
      <div className='section_footer text-purple'>
        © 2022  Made with ❤️ by Christy Seddon
        <a
          className='text-white'
          href='https://github.com/CSeddon01'
          target="_git">
        </a>
      </div>
    </div>
  );
}