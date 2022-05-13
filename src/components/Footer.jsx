import React from 'react';

export default function Footer() {
  return (
    <footer className="footer mt-3 position-sticky">
      <div className='container-fluid'>
        <section className='d-flex justify-content-center'>
          <a
            className='btn btn-floating m-3'
            style={{ backgroundColor: 'var(--primary)' }}
            href='https://www.linkedin.com/in/christine-seddon-2a97a2158/'
            role='button'
            target='_link'
          >LinkedIn</a>
          <a
            className='btn btn-floating m-3 '
            style={{ backgroundColor: 'var(--primary)' }}
            href='https://github.com/CSeddon01'
            role='button'
            target='_git'
          >GitHub</a>
          <p className='m-3'
            style={{ color: "var(--dark)" }}>
            © 2022  Made with ❤️ by Christy Seddon
          </p>
        </section>
      </div>

    </footer>
  );
}