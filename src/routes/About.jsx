import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-16 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 mb-4">
            About Our Company
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We build elegant, reliable, and beautifully crafted products that help people keep track of what matters most — their time.
          </p>
        </div>

        {/* Two-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MyWatches was founded in 2023 with a clear vision: to bring sophisticated timepieces to people around the world without compromising on design or quality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a growing global presence and a passionate team behind our work, we are proud to serve our customers with products that are both beautiful and dependable.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1519741491044-0f3074b79e60"
            alt="About us"
            className="rounded-lg shadow-lg w-full object-cover h-80"
          />
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2 text-indigo-600">Integrity</h3>
              <p className="text-sm text-gray-600">We operate with honesty, transparency, and a deep respect for our customers and partners.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2 text-indigo-600">Quality</h3>
              <p className="text-sm text-gray-600">Every product is crafted to meet the highest standards of design, durability, and performance.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2 text-indigo-600">Innovation</h3>
              <p className="text-sm text-gray-600">We constantly explore new technologies and design trends to lead and never follow.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2 text-indigo-600">Customer First</h3>
              <p className="text-sm text-gray-600">Your satisfaction is our priority. We go the extra mile to exceed expectations.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Want to learn more about our journey or get in touch?
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white font-medium py-3 px-6 rounded-md hover:bg-indigo-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
