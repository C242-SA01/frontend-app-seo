// src/components/Homepage.tsx
import Image from "next/image";
import React from "react";

const Homepage: React.FC = () => {
  return (
    <div>
      {/* Main Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen py-20">
        <h1 className="mb-4 text-4xl font-extrabold text-center text-black">Powerful SEO Solutions With Bizzagi</h1>
        <p className="max-w-2xl mb-6 text-lg text-center text-black">
          We are a team of talented SEO optimization digital marketers, dedicated to helping your business grow, rank higher, and achieve outstanding results in the digital landscape.
        </p>
        <div className="flex flex-col items-center justify-center w-full max-w-2xl sm:flex-row">
          <input type="text" placeholder="Enter the link, domain, or URL here" className="w-full p-3 mb-4 border border-gray-300 rounded-md sm:mb-0 sm:mr-4" />
          <button className="px-10 py-3 text-white transition duration-300 rounded-md bg-primary hover:bg-yellow-600">Start Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <h2 className="mb-10 text-3xl font-bold text-center text-black">We provide the Perfect Solution to your business growth</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="p-4 text-left shadow-lg card">
            <figure className="mb-4">
              <Image src="/images/Heart.png" alt="Performance Metrics" width={100} height={100} className="mx-auto rounded-xl" />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-bold text-black">Performance Metrics</h3>
              <p className="text-gray-600">We help identify the best ways to improve your business.</p>
            </div>
          </div>

          <div className="p-4 text-left shadow-lg card">
            <figure className="mb-4">
              <Image src="/images/Activity.png" alt="Metadata" width={100} height={100} className="mx-auto rounded-xl" />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-bold text-black">Metadata</h3>
              <p className="text-gray-600">We help identify the best ways to improve your business.</p>
            </div>
          </div>

          <div className="p-4 text-left shadow-lg card">
            <figure className="mb-4">
              <Image src="/images/Work.png" alt="Content Analysis" width={100} height={100} className="mx-auto rounded-xl" />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-bold text-black">Content Analysis</h3>
              <p className="text-gray-600">We help identify the best ways to improve your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 bg-yellow-100">
        <h2 className="mb-10 text-3xl font-bold text-center text-black">Our Impact in Numbers</h2>
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-primary">20%</h3>
            <p className="text-black">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-primary">100+</h3>
            <p className="text-black">Completed Projects</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <h2 className="mb-10 text-3xl font-bold text-center text-black">Our Team C242-SA01</h2>
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          <div className="text-center">
            <h3 className="mb-2 text-2xl font-semibold text-black">Denny Irawan</h3>
            <p className="text-gray-600">Backend - Cloud Computing</p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-2xl font-semibold text-black">Liem, Ivan Budiono</h3>
            <p className="text-gray-600">Frontend - Cloud Computing</p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-2xl font-semibold text-black">Lintang</h3>
            <p className="text-gray-600">Data Analyst - Machine Learning</p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-2xl font-semibold text-black">Egbert</h3>
            <p className="text-gray-600">Data Engineer - Machine Learning</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-yellow-100">
        <h2 className="mb-10 text-3xl font-bold text-center text-black">Get in Touch</h2>
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          <form className="flex flex-col w-full max-w-md gap-4">
            <input type="text" placeholder="Your Name" className="p-3 border border-gray-300 rounded-md" />
            <input type="email" placeholder="Your Email" className="p-3 border border-gray-300 rounded-md" />
            <textarea placeholder="Your Message" className="p-3 border border-gray-300 rounded-md"></textarea>
            <button className="px-6 py-3 text-white transition duration-300 bg-yellow-500 rounded-md hover:bg-yellow-600">Submit</button>
          </form>
          <div className="text-center">
            <p className="text-black">Djakarta Poesat</p>
            <p className="text-black">000111223333</p>
            <p className="text-black">seo242-sa01@bangkit.academy</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-yellow-500">
        <div className="flex flex-col items-center justify-between px-10 text-white md:flex-row">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">SEO Bizzagi</h3>
            <p>Some footer text about the Agency...</p>
          </div>
          <div className="flex flex-col items-center gap-10 md:flex-row">
            <div>
              <h4 className="mb-2 text-lg font-semibold">Quick Links</h4>
              <ul>
                <li>
                  <a href="#home" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold">Address</h4>
              <p>Jln. Bangkit academy No. 24, Djakarta Poesat</p>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center">Copyright SEO Bizzagi 2022</p>
      </footer>
    </div>
  );
};

export default Homepage;
