import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
          Contact Us
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We'd love to hear from you!
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              Your Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900">
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send Message
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Need help?
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Visit Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
