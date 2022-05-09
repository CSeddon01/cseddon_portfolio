import React from 'react';


export default function Footer() {
  return (
    <div className='bg-light text-center text-white'>
      <div className='container p-4 pb-0'>
        <section className='mb-4'>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://www.linkedin.com/in/christine-seddon-2a97a2158/'
            role='button'
            target='_blank'
          >LinkedIn</a>

          <a
            className='btn btn-primary btn-floating m-1 '
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/CSeddon01'
            role='button'
            target='_blank'
          >GitHub</a>
        </section>
      </div>

      <div className='fa fa-copyright' style={{ backgroundColor: '#8AAC7A' }}>
        © 2022 Copyright
        <a className='text-white' href='https://github.com/CSeddon01'>

        </a>
      </div>
    </div>
  );
}