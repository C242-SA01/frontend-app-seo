// src/components/Homepage.tsx
import Image from "next/image";
import React from "react";

const Homepage: React.FC = () => {
  return (
    <div>
      {/* Main Page Section */}
      <section className="flex flex-col items-center justify-center min-h-screen py-20">
        <h1 className="mb-4 text-4xl font-extrabold text-center text-black">Powerful SEO Solutions With Bizzagi</h1>
        <p className="max-w-2xl mb-6 text-lg text-center text-black">
          We are a team of talented SEO optimization digital marketers, dedicated to helping your business grow, rank higher, and achieve outstanding results in the digital landscape.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-3xl">
          <input type="text" placeholder="Enter the link, domain, or URL here" className="p-4 border border-gray-300 rounded-md w-full sm:w-3/4 mb-4 sm:mb-0 sm:mr-4" />
          <button className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition duration-300">Start Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <h2 className="mb-10 text-4xl font-bold text-center text-black">
          We provide the Perfect Solution to your business growth
        </h2>
        <div className="flex space-x-6 overflow-x-auto px-4 w-full scrollbar-hide">
          {/* General Information */}
          <div className="card bg-yellow-100 p-6 min-w-[350px] max-w-[400px] flex-shrink-0">
            <figure className="mt-12 mb-8">
              <Image
                src="/images/Activity.png"
                alt="General Information"
                width={100}
                height={100}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-bold text-black">General Information</h3>
              <p className="text-black">
                We provide key insights about your website's overall SEO health.
              </p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="card bg-yellow-100 p-6 min-w-[350px] max-w-[400px] flex-shrink-0">
            <figure className="mt-12 mb-8">
              <Image
                src="/images/Heart.png"
                alt="Performance Metrics"
                width={100}
                height={100}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-bold text-black">Performance Metrics</h3>
              <p className="text-black">
                We help identify the best ways to improve your business.
              </p>
            </div>
          </div>

          {/* Content Analysis */}
          <div className="card bg-yellow-100 p-6 min-w-[350px] max-w-[400px] flex-shrink-0">
            <figure className="mt-12 mb-8">
              <Image
                src="/images/Work.png"
                alt="Content Analysis"
                width={100}
                height={100}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-bold text-black">Content Analysis</h3>
              <p className="text-black">
                We provide insights into your content's relevance and quality.
              </p>
            </div>
          </div>

          {/* Metadata */}
          <div className="card bg-yellow-100 p-6 min-w-[350px] max-w-[400px] flex-shrink-0">
            <figure className="mt-12 mb-8">
              <Image
                src="/images/Activity.png"
                alt="Metadata"
                width={100}
                height={100}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-bold text-black">Metadata</h3>
              <p className="text-black">
                We analyze metadata to ensure it's optimized for search engines.
              </p>
            </div>
          </div>

          {/* Notes & Recommendations */}
          <div className="card bg-yellow-100 p-6 min-w-[350px] max-w-[400px] flex-shrink-0">
            <figure className="mt-12 mb-8">
              <Image
                src="/images/Activity.png"
                alt="Notes & Recommendations"
                width={100}
                height={100}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-bold text-black">Notes & Recommendations</h3>
              <p className="text-black">
                We provide detailed notes and actionable recommendations for improving your SEO.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Impact Metrics Section */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto flex gap-10">
          {/* Bagian Heading */}
          <div className="w-1/2 flex flex-col justify-start">
            <h2 className="text-left text-8xl font-bold text-black mb-10">Our Impact in Numbers</h2>
            
            {/* Customer Satisfaction & Completed Projects */}
            <div className="flex gap-8">
              {/* Customer Satisfaction */}
              <div className="flex flex-col items-center p-10 bg-yellow-100 shadow-lg rounded-lg w-full max-w-sm">
                <Image src="/icons/Customer.png" alt="Customer Satisfaction" width={60} height={60} />
                <h3 className="mt-6 text-4xl font-bold text-black">20%</h3>
                <p className="mt-2 text-black text-center">Customer Satisfaction</p>
              </div>

              {/* Completed Projects */}
              <div className="flex flex-col items-center p-10 bg-yellow-100 shadow-lg rounded-lg w-full max-w-sm">
                <Image src="/icons/Projects.png" alt="Completed Projects" width={60} height={60} />
                <h3 className="mt-6 text-4xl font-bold text-black">0</h3>
                <p className="mt-2 text-black text-center">Completed Projects</p>
              </div>
            </div>
          </div>

          {/* Bagian Gambar Placeholder */}
          <div className="w-1/2">
            <Image src="/images/Image.png" alt="Impact Placeholder" width={600} height={400} className="object-contain w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <h2 className="mb-10 text-4xl font-bold text-center text-black">The Dream Team That Makes It All Possible!</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-10 min-h-[500px]">
          {/* Card untuk setiap anggota tim */}
          {[
            { name: 'Denny Irawan',
              role: 'Student',
              tech: 'Cloud Computing', 
              image: '/images/Image.png', 
              social: [
                { platform: 'whatsapp', link: '' },
                { platform: 'linkedin', link: 'https://www.linkedin.com/in/denny-irawan22/' },
                { platform: 'instagram', link: '' },
              ],
            },
            { name: 'Liem, Ivan Budiono',
              role: 'Student',
              tech: 'Cloud Computing',
              image: '/images/Image.png',
              social: [
                { platform: 'whatsapp', link: ''},
                { platform: 'linkedin', link: 'https://www.linkedin.com/in/ivanbudiono/'},
                { platform: 'instagram', link: ''},
              ],
            },
            { name: 'Lintang Iqhtiar Dwi Mawarni',
              role: 'Student',
              tech: 'Machine Learning',
              image: '/images/Image.png',
              social: [
                { platform: 'whatsapp', link: ''},
                { platform: 'linkedin', link: 'https://www.linkedin.com/in/lintang-iqhtiar-13b7t1995/'},
                { platform: 'instagram', link: ''},
              ],
            },
            { name: 'Egbert Tjandra',
              role: 'Student',
              tech: 'Machine Learning', 
              image: '/images/Image.png', 
              social: [
                { platform: 'whatsapp', link: ''},
                { platform: 'linkedin', link: 'https://www.linkedin.com/in/egbert-tjandra-ba192432a/'},
                { platform: 'instagram', link: ''},
              ],
            },
          ].map((member, index) => (
            <div key={index} className="bg-yellow-100 p-6 rounded-lg shadow-md flex flex-col items-start relative">
              <Image
                src={member.image}
                alt={`${member.name} photo`}
                width={500}
                height={500}
                className="rounded-md mb-8"
              />
              <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
              <p className="font-semibold text-black mb-1">{member.role}</p>
              <p className="text-black mb-4">{member.tech}</p>
              <div className="absolute bottom-4 right-4 flex space-x-4">
                {member.social.map((socialItem, index) => (
                  <a key={index} href={socialItem.link} aria-label={socialItem.platform} target="_blank" rel="noopener noreferrer">
                    <img src={`/icons/${socialItem.platform}.png`} alt={socialItem.platform} width={24} height={24} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20">
        <h2 className="mb-10 text-4xl font-bold text-center text-black">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 max-w-7xl mx-auto">
          <form className="flex flex-col w-full md:w-1/2 gap-4 bg-yellow-100 p-6 rounded-lg shadow-md">
            <label className="text-black mb-1">Name</label>
            <input type="text" placeholder="Your Name" className="p-3 border border-gray-300 rounded-md" />
            <label className="text-black mb-1">Email</label>
            <input type="email" placeholder="Your Email" className="p-3 border border-gray-300 rounded-md" />
            <label className="text-black mb-1">Message</label>
            <textarea placeholder="Your Message" className="p-3 border border-gray-300 rounded-md"></textarea>
            <button className="px-6 py-3 font-semibold text-black transition duration-300 bg-yellow-500 rounded-md hover:bg-yellow-600">Submit</button>
          </form>
          <div className="flex flex-col items-start md:w-1/2 gap-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.107281179108!2d110.41087679999998!3d-6.983986499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4f19af0393%3A0x11304de4230ded0d!2sLawang%20Sewu!5e0!3m2!1sen!2sid!4v1732538432515!5m2!1sen!2sid"
              width="600"
              height="315"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="flex flex-col items-start space-y-2">
              <p className="text-black flex items-center">
                <i className="ri-map-pin-line mr-2"></i>
                Jl. Pemuda No.160, Sekayu, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50132
              </p>
              <p className="text-black flex items-center">
                <i className="ri-phone-line mr-2"></i>
                0821-3461-1660
              </p>
              <p className="text-black flex items-center">
                <i className="ri-mail-line mr-2"></i>
                lawangsewu@bangkit.academy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-primary">
        <p className="text-center text-black font-semibold">&copy; 2024 SEOBizzagi. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
