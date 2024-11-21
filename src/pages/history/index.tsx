import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const AboutPage = () => {
  return (
    <div className="flex justify-center items-center">
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  );
};
export default AboutPage;
