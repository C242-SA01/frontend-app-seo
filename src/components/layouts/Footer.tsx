const Footer = () => {
  return (
    <footer className="py-10 bg-primary">
      <div className="flex flex-col items-center justify-between px-10 text-black md:flex-row">
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
  );
};
export default Footer;
